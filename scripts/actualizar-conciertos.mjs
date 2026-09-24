import { readFile, writeFile, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve, relative, isAbsolute } from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const args = process.argv.slice(2);
if (args.some(argument => argument !== '--check')) throw new Error('Única opción admitida: --check');
const checkOnly = args.includes('--check');
const data = JSON.parse(await readFile(resolve(root, 'datos/conciertos.json'), 'utf8'));
const months = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
const monthNames = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

function text(value, field) {
    if (typeof value !== 'string' || !value.trim()) throw new Error(`Falta un texto válido: ${field}`);
    return value;
}

function escapeHtml(value) {
    return value.replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
}

function calendarDate(value) {
    if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}[+-]\d{2}:\d{2})?$/.test(value)) {
        throw new Error(`Fecha ISO no válida: ${value}`);
    }
    const day = value.slice(0, 10);
    const date = new Date(`${day}T12:00:00Z`);
    if (Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== day || Number.isNaN(Date.parse(value))) {
        throw new Error(`Fecha imposible: ${value}`);
    }
    return date;
}

async function localImage(value) {
    text(value, 'imagen');
    const path = resolve(root, value);
    const rel = relative(root, path);
    if (isAbsolute(rel) || rel.startsWith('..') || !/^(?:recursos\/|logo-talisker)[a-z0-9/_. -]*\.(?:jpe?g|webp|png)$/i.test(value)) {
        throw new Error(`La imagen debe estar dentro del proyecto: ${value}`);
    }
    await access(path);
}

function replaceBlock(source, start, end, content) {
    const first = source.indexOf(start);
    const last = source.indexOf(end, first + start.length);
    if (first < 0 || last < 0 || source.indexOf(start, first + start.length) >= 0 || source.indexOf(end, last + end.length) >= 0) {
        throw new Error(`Marcadores ausentes o duplicados: ${start}`);
    }
    return `${source.slice(0, first + start.length)}\n${content}\n${source.slice(last)}`;
}

calendarDate(data.updatedAt);
if (!Array.isArray(data.upcoming) || !data.past || typeof data.past !== 'object') throw new Error('Faltan próximos conciertos o histórico');

for (const concert of data.upcoming) {
    calendarDate(concert.date);
    for (const field of ['title', 'venue', 'description', 'badge', 'imageAlt']) text(concert[field], field);
    if (!['foto', 'cartel'].includes(concert.imageKind)) throw new Error('imageKind debe ser foto o cartel');
    if (typeof concert.contain !== 'boolean' || typeof concert.showAction !== 'boolean') throw new Error('contain y showAction deben ser booleanos');
    await localImage(concert.poster);
    await localImage(concert.thumbnail);
}

const allConcerts = {};
for (const year of Object.keys(data.past).sort((a, b) => Number(b) - Number(a))) {
    if (!/^20\d{2}$/.test(year) || !Array.isArray(data.past[year])) throw new Error(`Año no válido: ${year}`);
    for (const concert of data.past[year]) {
        for (const field of ['date', 'title', 'venue', 'description']) text(concert[field], field);
        if (!concert.date.endsWith(` ${year}`)) throw new Error(`Fecha fuera del año ${year}: ${concert.date}`);
        await localImage(concert.poster);
    }
    allConcerts[`concerts-${year}`] = data.past[year];
}

function upcomingCard(concert) {
    const date = calendarDate(concert.date);
    const day = date.getUTCDate();
    const month = date.getUTCMonth();
    const year = date.getUTCFullYear();
    const title = escapeHtml(concert.title);
    const poster = escapeHtml(concert.poster);
    const posterTitle = escapeHtml(`${concert.title} · ${day} de ${monthNames[month]} de ${year}`);
    const action = `Ampliar ${concert.imageKind === 'foto' ? 'la foto' : 'el cartel'} de ${concert.title}`;
    const buttonAction = `Ampliar ${concert.imageKind}`;
    return `            <div class="upcoming-card">
                <button type="button" class="poster-trigger"
                        data-poster-src="${poster}"
                        data-poster-title="${posterTitle}"
                        aria-label="${escapeHtml(action)}">
                    <img src="${escapeHtml(concert.thumbnail)}"
                         alt="${escapeHtml(concert.imageAlt)}"
                         class="upcoming-thumbnail${concert.contain ? ' poster-contain' : ''}"
                         loading="lazy" decoding="async">
                </button>
                <div class="upcoming-content">
                    <div class="upcoming-badge">${escapeHtml(concert.badge)}</div>
                    <time class="upcoming-date" datetime="${escapeHtml(concert.date)}">${String(day).padStart(2, '0')} ${months[month]} ${year}</time>
                    <h3 class="upcoming-title">${title}</h3>
                    <p class="upcoming-venue">${escapeHtml(concert.venue)}</p>
                    <p class="upcoming-description">${escapeHtml(concert.description)}</p>${concert.showAction ? `
                    <button type="button"
                            class="btn btn-secondary upcoming-btn"
                            data-poster-src="${poster}"
                            data-poster-title="${posterTitle}"
                            aria-label="${escapeHtml(`${buttonAction} de ${concert.title}`)}">
                        ${buttonAction}
                    </button>` : ''}
                </div>
            </div>`;
}

const originals = {};
for (const name of ['index.html', 'script.js', 'sitemap.xml']) originals[name] = await readFile(resolve(root, name), 'utf8');
let html = originals['index.html'].replace(/\r\n/g, '\n');
const cards = data.upcoming.map(upcomingCard).join('\n\n');
const upcomingMarkup = data.upcoming.length
    ? `        <div class="upcoming-grid">\n${cards}\n        </div>`
    : `        <div class="upcoming-secret">
            <p class="upcoming-secret-kicker">NUEVAS FECHAS EN CAMINO</p>
            <h3>Tenemos nuevas actuaciones preparadas...</h3>
            <p>Pero, de momento, son un secreto. Muy pronto desvelaremos las próximas paradas de Talisker Band.</p>
        </div>`;
html = replaceBlock(html, '<!-- INICIO PROXIMOS GENERADOS -->', '        <!-- FIN PROXIMOS GENERADOS -->', upcomingMarkup);
const pageYears = [...html.matchAll(/id="year-toggle-(\d{4})"/g)].map(match => match[1]);
if (pageYears.length !== Object.keys(data.past).length || pageYears.some(year => !Object.hasOwn(data.past, year))) {
    throw new Error('Los años del histórico y los paneles HTML deben coincidir');
}
for (const [year, concerts] of Object.entries(data.past)) {
    const pattern = new RegExp(`(id="year-toggle-${year}"[\\s\\S]*?<span class="year-count" data-year-count>)[^<]*(</span>)`);
    if (!pattern.test(html)) throw new Error(`No se encuentra el contador de ${year}`);
    html = html.replace(pattern, `$1 • ${concerts.length} ${concerts.length === 1 ? 'actuación' : 'actuaciones'}$2`);
}
const generated = `const allConcerts = ${JSON.stringify(allConcerts, null, 4).replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029')};`;
const script = replaceBlock(originals['script.js'].replace(/\r\n/g, '\n'), '// INICIO DATOS GENERADOS DE CONCIERTOS', '// FIN DATOS GENERADOS DE CONCIERTOS', generated);
const sitemap = originals['sitemap.xml'].replace(/<lastmod>[^<]+<\/lastmod>/, `<lastmod>${data.updatedAt}</lastmod>`);
const outputs = { 'index.html': html, 'script.js': script, 'sitemap.xml': sitemap };
const changed = Object.keys(outputs).filter(name => outputs[name].replace(/\r\n/g, '\n') !== originals[name].replace(/\r\n/g, '\n'));

if (checkOnly) {
    if (changed.length) throw new Error(`Archivos desactualizados: ${changed.join(', ')}. Ejecuta node scripts/actualizar-conciertos.mjs`);
    console.log('Conciertos y contadores sincronizados.');
} else {
    for (const name of changed) await writeFile(resolve(root, name), outputs[name], 'utf8');
    console.log(changed.length ? `Actualizados: ${changed.join(', ')}` : 'Sin cambios; los conciertos ya están sincronizados.');
}
