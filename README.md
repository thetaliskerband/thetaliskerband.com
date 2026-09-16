# Talisker Band

Web oficial estática de Talisker Band, preparada para publicarse con GitHub Pages en `https://taliskerband.com/`.

## Estructura

- `index.html`: portada y contenido principal.
- `recursos/`: carteles, fotografías, miniaturas WebP y tipografías utilizadas por la web.
- `recursos/dossier/`: dossier artístico descargable en PDF.
- `script.js`: conciertos pasados y comportamiento interactivo.
- `datos/conciertos.json`: fuente única de los conciertos próximos e históricos.
- `scripts/actualizar-conciertos.mjs`: genera las tarjetas estáticas, el histórico y sus contadores, sin dependencias.
- `styles.css`: diseño general y responsive.
- `sitemap.xml` y `robots.txt`: rastreo e indexación.

## Actualizar conciertos

1. Añadir el cartel original a `recursos/proximos/` o `recursos/conciertos/`.
2. Crear una miniatura WebP para las tarjetas y guardarla en `recursos/miniaturas/`.
3. Editar `datos/conciertos.json`: `upcoming` contiene los próximos conciertos y `past` el histórico agrupado por año. Conservar el orden deseado, sin dar prioridad a conciertos públicos o privados.
4. Cuando una actuación haya terminado, quitarla de `upcoming` y añadirla al año correspondiente de `past`. Este paso es explícito: no se retiran conciertos automáticamente por llegar su fecha.
5. Actualizar `updatedAt` con la fecha de revisión y ejecutar `node scripts/actualizar-conciertos.mjs`. El script valida fechas e imágenes, genera las tarjetas de `index.html`, los datos del histórico en `script.js`, todos los contadores y el `lastmod` del sitemap.
6. Comprobar la sincronización con `node scripts/actualizar-conciertos.mjs --check` antes de subir los cambios.

No editar manualmente los bloques delimitados como generados en `index.html` y `script.js`. El resto del contenido y la lógica de interacción se siguen editando normalmente.

Los reproductores de YouTube y Spotify se cargan solo al pulsar sus portadas. Los enlaces directos permiten abrir el contenido aunque JavaScript esté desactivado o el reproductor externo falle.

Las exportaciones privadas de Instagram no deben guardarse dentro del repositorio.

Las tipografías Inter y Playfair Display se sirven localmente desde `recursos/fonts/` bajo la licencia SIL Open Font License incluida en esa carpeta.
