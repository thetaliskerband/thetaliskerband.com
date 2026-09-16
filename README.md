# Talisker Band

Web oficial estática de Talisker Band, preparada para publicarse con GitHub Pages en `https://taliskerband.com/`.

## Estructura

- `index.html`: portada y contenido principal.
- `recursos/`: carteles, fotografías, miniaturas WebP y tipografías utilizadas por la web.
- `recursos/dossier/`: dossier artístico descargable en PDF.
- `script.js`: conciertos pasados y comportamiento interactivo.
- `styles.css`: diseño general y responsive.
- `sitemap.xml` y `robots.txt`: rastreo e indexación.

## Actualizar conciertos

1. Añadir el cartel original a `recursos/proximos/` o `recursos/conciertos/`.
2. Crear una miniatura WebP para las tarjetas y guardarla en `recursos/miniaturas/`.
3. Actualizar la sección de próximos conciertos en `index.html`: la miniatura se usa en `src` y el original en `data-poster-src`.
4. Cuando el concierto haya pasado, incorporarlo al año correspondiente en `script.js`.
5. Actualizar la fecha `lastmod` de `sitemap.xml`.

Las exportaciones privadas de Instagram no deben guardarse dentro del repositorio.

Las tipografías Inter y Playfair Display se sirven localmente desde `recursos/fonts/` bajo la licencia SIL Open Font License incluida en esa carpeta.
