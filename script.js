/* =====================================================
   TALISKER BAND - JAVASCRIPT

   Los conciertos se editan en datos/conciertos.json.
   Regenerar tarjetas y contadores:
   node scripts/actualizar-conciertos.mjs

   La lógica interactiva se mantiene debajo del bloque generado.
   ===================================================== */

// INICIO DATOS GENERADOS DE CONCIERTOS
const allConcerts = {
    "concerts-2026": [
        {
            "date": "19 SEP 2026",
            "title": "Actuación privada",
            "venue": "Evento privado",
            "poster": "recursos/promocional/foto-promocional-talisker.jpeg",
            "description": "<p>Actuación privada de Talisker Band celebrada el 19 de septiembre de 2026.</p>\n        <p>La ubicación y los detalles del evento no se publican por respeto a su carácter privado.</p>"
        },
        {
            "date": "19 SEP 2026",
            "title": "Festival Folk de Usera",
            "venue": "Plaza de la Asociación, Orcasitas (Usera), Madrid",
            "poster": "recursos/proximos/2026-09-19-usera.jpg",
            "description": "<p>Actuamos en el Festival Folk de Usera junto a Arrabel, en la Plaza de la Asociación de Orcasitas.</p>\n        <p>Una tarde para compartir música y tradición en directo con el público de Usera.</p>"
        },
        {
            "date": "15 SEP 2026",
            "title": "Grabación para la Embajada de Irlanda",
            "venue": "Madrid",
            "poster": "recursos/conciertos/2026-09-15-embajada-irlanda.jpg",
            "description": "<p>Participamos en una grabación para la Embajada de Irlanda en España, llevando la música tradicional irlandesa a las calles de Madrid.</p>\n        <p>El resultado se publicó el 25 de septiembre de 2026 en la cuenta oficial de la Embajada.</p>"
        },
        {
            "date": "13 SEP 2026",
            "title": "XXI Folkez Blai",
            "venue": "Plaza Cardenal Orbe, Ermua",
            "poster": "recursos/conciertos/2026-09-13-ermua.jpg",
            "description": "<p>Participamos en la vigesimoprimera edición del Folkez Blai, celebrado en la Plaza Cardenal Orbe de Ermua.</p>\n        <p>Una nueva parada de nuestra temporada 2026 llevando música folk y celta en directo al País Vasco.</p>"
        },
        {
            "date": "26 JUL 2026",
            "title": "XVII Certame Celtibérico de Bandas de Gaitas",
            "venue": "Manzaneda, Ourense",
            "poster": "recursos/conciertos/2026-07-25-26-manzaneda.jpg",
            "description": "<p>Participamos en el XVII Certame Celtibérico de Bandas de Gaitas en Manzaneda, compitiendo en la categoría de segundo grado.</p>\n        <p>Talisker Band consiguió el segundo puesto y regresó a Madrid como subcampeona del certamen.</p>"
        },
        {
            "date": "25 JUL 2026",
            "title": "Noite Celta de Manzaneda",
            "venue": "Estación de Montaña de Manzaneda, Ourense",
            "poster": "recursos/conciertos/2026-07-25-26-manzaneda.jpg",
            "description": "<p>Actuamos en la Noite Celta de Manzaneda dentro del fin de semana del XVII Certame Celtibérico de Bandas de Gaitas.</p>\n        <p>Una noche dedicada a la música y la cultura tradicional antes de la competición del domingo.</p>"
        },
        {
            "date": "18 JUL 2026",
            "title": "VI Festival Vettonia Folk",
            "venue": "Navalmoral de la Sierra, Ávila",
            "poster": "recursos/conciertos/2026-07-18-vettonia.jpg",
            "description": "<p>Abrimos el Festival Vettonia Folk con un pasacalles de gaitas y percusión por Navalmoral de la Sierra.</p>\n        <p>La cita reunió a medio millar de personas alrededor de distintas formas de entender y renovar la música tradicional.</p>"
        },
        {
            "date": "10 JUL 2026",
            "title": "IX Festival del Agua",
            "venue": "Pozo Alcón y Quesada, Jaén",
            "poster": "recursos/conciertos/2026-07-10-festival-agua.jpg",
            "description": "<p>Participamos en el IX Festival del Agua, una edición dedicada al folclore español en el entorno de las sierras de Cazorla, Segura y Las Villas.</p>\n        <p>La jornada incluyó una actuación por la tarde en La Peña de Quesada y el concierto nocturno en El Fontanar.</p>"
        },
        {
            "date": "16 JUN 2026",
            "title": "Actuación privada",
            "venue": "Hortaleza, Madrid",
            "poster": "recursos/conciertos/2026-06-16-actuacion-privada.jpg",
            "description": "<p>Actuación privada de Talisker Band en Hortaleza, anunciada dentro del calendario de fechas de verano.</p>\n        <p>Una nueva ocasión para compartir música y baile tradicional en directo.</p>"
        },
        {
            "date": "06 JUN 2026",
            "title": "Fiestas de Hortaleza",
            "venue": "Auditorio Pilar García Peña, Madrid",
            "poster": "recursos/proximos/2026-06-06-fiestas-hortaleza-cartel.jpg",
            "description": "<p>Tras ganar el Certamen Roberto Mira, volvimos al auditorio para celebrarlo con un concierto especial dentro de las Fiestas de Primavera de Hortaleza.</p>\n        <p>Una noche muy simbólica para Talisker Band como banda ganadora del certamen.</p>"
        },
        {
            "date": "05 JUN 2026",
            "title": "Las Noches del Huerto",
            "venue": "Huerto Comunitario de Manoteras, Madrid",
            "poster": "recursos/proximos/2026-06-05-las-noches-del-huerto.jpg",
            "description": "<p>Volvimos a Manoteras para una noche de folk celta al aire libre, cata de poesía y celebración tras el primer premio del Certamen Roberto Mira.</p>\n        <p>Un concierto muy especial en uno de esos espacios que ya sentimos cercanos.</p>"
        },
        {
            "date": "30 MAY 2026",
            "title": "Final del Certamen Roberto Mira",
            "venue": "Auditorio Pilar García Peña, Madrid",
            "poster": "recursos/conciertos/2026-05-30-roberto-mira.jpg",
            "description": "<p>Actuamos en la final del Certamen de Música Roberto Mira dentro de las Fiestas de Primavera de Hortaleza.</p>\n        <p>Una tarde muy especial compartiendo escenario con otras bandas y celebrando después el primer premio del certamen.</p>"
        },
        {
            "date": "16 MAY 2026",
            "title": "III Mercado Celta de Alcorcón",
            "venue": "Plaza Reyes de España, Alcorcón",
            "poster": "recursos/conciertos/2026-05-16-mercado-celta-alcorcon.jpg",
            "description": "<p>Llevamos nuestra música al III Mercado Celta de Alcorcón en una noche llena de energía, invitados especiales y entrada gratuita.</p>\n        <p>Una cita preciosa junto a la Casa de Galicia de Alcorcón y el Ayuntamiento de Alcorcón.</p>"
        },
        {
            "date": "25 ABR 2026",
            "title": "Festival de Arte Callejero de Trebujena",
            "venue": "Trebujena, Cádiz",
            "poster": "recursos/conciertos/2026-04-25-trebujena.jpg",
            "description": "<p>Viajamos al sur para formar parte del Festival de Arte Callejero de Trebujena con una pequeña representación de nuestras diferentes secciones.</p>\n        <p>Baile irlandés, baile gallego y gaitas llevando un pedacito de Talisker a Andalucía.</p>"
        },
        {
            "date": "24 ABR 2026",
            "title": "Café Teatro Varvi",
            "venue": "Madrid",
            "poster": "recursos/conciertos/2026-04-24-varvi.jpg",
            "description": "<p>Concierto especial en el Café Teatro Varvi, en pleno Paseo Pintor Rosales.</p>\n        <p>Una noche de directo intenso, entradas limitadas y mucha cercanía con el público.</p>"
        },
        {
            "date": "19 MAR 2026",
            "title": "San Patricio en The Beer Temple",
            "venue": "Madrid",
            "poster": "recursos/conciertos/2026-03-19-the-beer-temple.jpg",
            "description": "<p>Volvimos a celebrar San Patricio en The Beer Temple con reels, baladas, brindis y mucho verde.</p>\n        <p>Una de esas noches que ya forman parte de la tradición de Talisker Band en Madrid.</p>"
        },
        {
            "date": "17 MAR 2026",
            "title": "San Patricio en Tramore Irish Tavern",
            "venue": "Leganés, Madrid",
            "poster": "recursos/conciertos/2026-03-17-tramore-leganes.jpg",
            "description": "<p>Celebramos el Día de San Patricio en Tramore Irish Tavern con música folk celta en directo y entrada gratuita hasta completar aforo.</p>\n        <p>Una fiesta irlandesa en Leganés con brindis, canciones y ganas de bailar.</p>"
        },
        {
            "date": "07 FEB 2026",
            "title": "Céilí Mór & Showcase de Escuelas",
            "venue": "Centro Gallego de Madrid",
            "poster": "recursos/proximos/ceili-mor-showcase.jpeg",
            "description": "<p>Participamos en una tarde de céilí, danza y música en vivo junto a la Asociación Española de Danzas Irlandesas.</p>\n        <p>Un encuentro muy especial para compartir baile, tradición y música en directo.</p>"
        }
    ],
    "concerts-2025": [
        {
            "date": "08 NOV 2025",
            "title": "Mercado de Motores",
            "venue": "Madrid",
            "poster": "recursos/conciertos/2025-11-08-mercado-motores.jpg",
            "description": "<p>Volvimos al emblemático Mercado de Motores de Madrid para cerrar el año con música celta y folk.</p>\n        <p>Una tarde increíble compartiendo nuestra música con el público madrileño.</p>"
        },
        {
            "date": "11 OCT 2025",
            "title": "Mercado Cervantino",
            "venue": "Alcalá de Henares",
            "poster": "recursos/conciertos/2025-10-11-mercado-cervantino.jpg",
            "description": "<p>Participamos en el tradicional Mercado Cervantino de Alcalá de Henares, una de las citas culturales más importantes de la Comunidad de Madrid.</p>\n        <p>Ambientamos las calles de la ciudad natal de Cervantes con nuestra música tradicional.</p>"
        },
        {
            "date": "08 OCT 2025",
            "title": "Fiestas del Pilar de Fuencarral-El Pardo",
            "venue": "Barrio de Fuencarral, Madrid",
            "poster": "recursos/conciertos/2025-10-08-fiestas-pilar.jpg",
            "description": "<p>Celebramos las Fiestas del Pilar de Fuencarral-El Pardo en el barrio de Fuencarral.</p>\n        <p>Una jornada llena de música y celebración con nuestros vecinos madrileños.</p>"
        },
        {
            "date": "20-21 SEP 2025",
            "title": "Mercado Medieval de Lasarte-Oria",
            "venue": "Guipúzcoa",
            "poster": "recursos/conciertos/2025-09-20-lasarte-oria.jpg",
            "description": "<p>Dos días de música medieval y celta en el País Vasco, en el mercado medieval de Lasarte-Oria.</p>\n        <p>Una experiencia única transportando al público a la época medieval con nuestra música tradicional.</p>"
        },
        {
            "date": "12 SEP 2025",
            "title": "Magiceltica",
            "venue": "Vallecas, Madrid",
            "poster": "recursos/conciertos/2025-09-12-magiceltica.jpg",
            "description": "<p>Festival Magiceltica en Vallecas, uno de los eventos de música celta más importantes de Madrid.</p>\n        <p>Compartimos escenario con grandes artistas del panorama folk y celta.</p>"
        },
        {
            "date": "28 JUN 2025",
            "title": "Concierto en Torneros de la Valdería",
            "venue": "León",
            "poster": "recursos/conciertos/2025-06-28-torneros.jpg",
            "description": "<p>Actuación especial en el pequeño pero encantador pueblo de Torneros de la Valdería en León.</p>\n        <p>Una noche mágica bajo las estrellas con la mejor música tradicional.</p>"
        },
        {
            "date": "14 JUN 2025",
            "title": "Festival Celtasur",
            "venue": "Cúllar Vega, Granada",
            "poster": "recursos/conciertos/2025-06-14-celtasur.jpg",
            "description": "<p>Participamos en el Festival Celtasur en Cúllar Vega, llevando nuestra música al sur de España.</p>\n        <p>Una experiencia increíble compartiendo la cultura celta en Andalucía.</p>"
        },
        {
            "date": "24 MAY 2025",
            "title": "Festival Lugnastar VI Edición",
            "venue": "Villastar, Teruel",
            "poster": "recursos/conciertos/2025-05-24-lugnastar.jpg",
            "description": "<p>Sexta edición del Festival Lugnastar en Villastar, Teruel. Un festival dedicado a la música folk y celta.</p>\n        <p>Disfrutamos de un fin de semana inolvidable en tierras turolenses.</p>"
        },
        {
            "date": "17 MAY 2025",
            "title": "Mercado Medieval de Berango",
            "venue": "Berango, País Vasco",
            "poster": "recursos/conciertos/2025-05-17-berango.jpg",
            "description": "<p>Volvimos al País Vasco para participar en el mercado medieval de Berango.</p>\n        <p>Una jornada llena de música, historia y tradición en un entorno único.</p>"
        },
        {
            "date": "11 MAY 2025",
            "title": "Mercado de Motores",
            "venue": "Madrid",
            "poster": "recursos/conciertos/2025-05-11-mercado-motores.jpg",
            "description": "<p>Nueva actuación en el Mercado de Motores, uno de nuestros lugares favoritos en Madrid.</p>\n        <p>El público respondió de manera espectacular a nuestra música.</p>"
        },
        {
            "date": "05 MAY 2025",
            "title": "Aparición en 'La Familia de la Tele'",
            "venue": "RTVE",
            "poster": "recursos/conciertos/2025-05-05-rtve.jpg",
            "description": "<p>Participamos en el programa \"La Familia de la Tele\" de RTVE, llevando nuestra música a miles de hogares españoles.</p>\n        <p>Una experiencia televisiva única que nos permitió dar a conocer la música celta a un público más amplio.</p>"
        },
        {
            "date": "17 MAR 2025",
            "title": "Concierto San Patricio - The Beer Temple",
            "venue": "Madrid",
            "poster": "recursos/conciertos/2025-03-17-san-patricio.jpg",
            "description": "<p>Celebramos San Patricio en The Beer Temple, nuestro lugar habitual para esta festividad tan especial.</p>\n        <p>Una noche llena de música irlandesa, baile y celebración con un público entregado.</p>"
        },
        {
            "date": "24 ENE 2025",
            "title": "Concierto Privado",
            "venue": "El Escorial",
            "poster": "recursos/conciertos/2025-01-24-escorial.jpg",
            "description": "<p>Concierto privado celebrado en El Escorial junto a Trébolinas, la Agrupación Rosalía de Castro y el Coro Awen.</p>\n        <p>Una noche especial compartiendo música y baile en directo.</p>"
        },
        {
            "date": "05 ENE 2025",
            "title": "Cabalgata de Reyes de Hortaleza",
            "venue": "Madrid",
            "poster": "recursos/conciertos/2025-01-05-cabalgata.jpg",
            "description": "<p>Abrimos el año 2025 participando en la tradicional Cabalgata de Reyes del distrito de Hortaleza en Madrid.</p>\n        <p>Una noche mágica trayendo ilusión a niños y familias con nuestra música.</p>"
        }
    ],
    "concerts-2024": [
        {
            "date": "26 DIC 2024",
            "title": "Galileo Galilei - Concierto por la Cabalgata participativa de Hortaleza",
            "venue": "Madrid",
            "poster": "recursos/conciertos/2024-12-26-galileo-galilei.jpg",
            "description": "<p>¡Muchas gracias por venir a la sala Galileo Galilei! Nos lo pasamos en grande compartiendo escenario con la gente tan talentosa que vino, desde grupos hasta cómicos, fue una noche espectacular.</p>\n        <p>Veros a todos tan entusiasmados y entregados mientras bailabais y os divertíais al son de Talisker Band, fue el mejor regalo de navidad que nos podríais haber dado. ¡Muchas gracias por tanto y por muchas más!</p>"
        },
        {
            "date": "14 DIC 2024",
            "title": "Festival Navideño en Manoteras",
            "venue": "Parque El Encuentro, Madrid",
            "poster": "recursos/conciertos/2024-12-14-manoteras.jpg",
            "description": "<p>Queremos daros las gracias por venir al concierto en el parque El Encuentro. El mercado navideño fue un toque especial junto a la máquina de nieve.</p>\n        <p>Aunque hizo bastante frío, ver vuestro entusiasmo y que os quedáseis hasta el final, lo compensó con creces y nos lo pasamos muy bien como siempre en Talisker. Gracias por todo y... ¡Nos vemos en la próxima!</p>"
        },
        {
            "date": "02 NOV 2024",
            "title": "IV Concurso para Conjuntos con Gaita Gallega",
            "venue": "Centro Gallego de Alicante",
            "poster": "recursos/conciertos/2024-11-02-concurso-alicante.jpg",
            "description": "<p>Participamos en el IV Concurso para Conjuntos Instrumentales con Gaita Gallega Ciudad de Alicante.</p>\n        <p>Talisker Band obtuvo el segundo premio en un encuentro que también nos permitió compartir música con agrupaciones llegadas de distintos puntos de España.</p>"
        },
        {
            "date": "26 OCT 2024",
            "title": "Los Vermúconciertos de Kulture Market",
            "venue": "Madrid",
            "poster": "recursos/conciertos/2024-10-26-kulture-market.jpg",
            "description": "<p>Muchísimas gracias a todos por venir a este concierto. Estuvimos muy cómodos tocando, el sonido fue increíble, y nos tratasteis de maravilla.</p>\n        <p>Esperamos volver a compartir juntos momentos así.</p>"
        },
        {
            "date": "19 OCT 2024",
            "title": "Mercado de Motores",
            "venue": "Madrid",
            "poster": "recursos/conciertos/2024-10-19-mercado-motores.jpg",
            "description": "<p>Hemos repetido en un sitio maravilloso, y al igual que la última vez, lo mejor fue el gran público que vino y se quedó durante todo el concierto, bailando, cantando y divirtiéndose.</p>\n        <p>Esperamos repetir pronto y volver a veros a todos igual de felices y contentos que después de este concierto.</p>\n        <p>No podemos olvidarnos del técnico de sonido que también repitió con nosotros, y lo hizo estupendamente. Sabemos que no es fácil sonorizarnos a tantos, pero él consiguió que todo funcionase en tiempo récord. Gracias por todo.</p>"
        },
        {
            "date": "13 JUL 2024",
            "title": "II Encuentro de Gaiteros y Dulzaineros",
            "venue": "Torneros de la Valdería, León",
            "poster": "recursos/conciertos/2024-07-13-gaiteros-dulzaineros.jpg",
            "description": "<p>Muy agradecidos por haber podido tocar en un sitio tan bonito y tan lleno de música y cultura folk. Fue un placer escuchar las piezas de todos los maravillosos músicos que estuvieron tocando a lo largo de la tarde.</p>\n        <p>Agradecemos también la hospitalidad de todos los involucrados en hacer de esto un encuentro tan especial. ¡Con ganas de volver a tocar allí!</p>"
        },
        {
            "date": "08 JUN 2024",
            "title": "Festival Lugnastar V Edición",
            "venue": "Villastar, Teruel",
            "poster": "recursos/conciertos/2024-06-08-lugnastar.jpg",
            "description": "<p>La experiencia de tocar en Villastar fue espectacular. A pesar de que el tiempo no acompañó, os quedasteis con nosotros y disfrutamos de un rato increíble, tanto nosotros como vosotros.</p>\n        <p>Muchísimas gracias por todo y esperamos vernos pronto.</p>"
        },
        {
            "date": "14 ABR 2024",
            "title": "Huerta de Tetuán",
            "venue": "Madrid",
            "poster": "recursos/conciertos/2024-04-14-huerta-tetuan.jpg",
            "description": "<p>¡Fue un placer tocar en la Huerta de Tetuán! La acogida fue estupenda y fue un concierto muy, muy animado.</p>\n        <p>Pasamos una mañana estupenda, seguida de una comida muy agradable junto a toda la gente del sitio. ¡Muchas gracias por todo!</p>"
        },
        {
            "date": "10 MAR 2024",
            "title": "Mercado de Motores",
            "venue": "Madrid",
            "poster": "recursos/conciertos/2024-03-10-mercado-motores.jpg",
            "description": "<p>Muchas gracias a todos los que vinisteis a vernos al Mercado de Motores, fue un concierto espectacular donde disfrutamos todos, tanto nosotros tocando con un público tan increíble, como vosotros, escuchando nuestra música y danzando a nuestro ritmo.</p>\n        <p>La belleza del sitio acompañó al concierto, y a pesar del mal tiempo que hubo, os quedasteis con nosotros de principio a fin. ¡Gracias, miles de gracias a todos!</p>"
        },
        {
            "date": "23 FEB 2024",
            "title": "Concierto benéfico en el Auditorio Marcelino Camacho",
            "venue": "Madrid",
            "poster": "recursos/conciertos/2024-02-23-auditorio-marcelino-camacho.jpg",
            "description": "<p>Concierto benéfico folk celta en el Auditorio Marcelino Camacho junto a la Agrupación Artística Gallega Rosalía de Castro y el Coro Awen.</p>\n        <p>La recaudación se destinó al proyecto solidario Water for All.</p>"
        }
    ],
    "concerts-2023": [
        {
            "date": "22 DIC 2023",
            "title": "Plaza de la Remonta",
            "venue": "Madrid",
            "poster": "recursos/conciertos/2023-12-22-plaza-remonta.jpg",
            "description": "<p>Queremos agradecer al Ayuntamiento de Madrid la oportunidad que nos ha dado de poder felicitar las Navidades a todo nuestro público con un gran concierto en una de las plazas más grandes de nuestra capital.</p>\n        <p>Y a todos vosotros por llenar este emblemático espacio a pesar del intenso frío que hizo.</p>"
        },
        {
            "date": "29 OCT 2023",
            "title": "Teatro Lara de Madrid",
            "venue": "Madrid",
            "poster": "recursos/conciertos/2023-10-29-teatro-lara.jpg",
            "description": "<p>Por segundo año consecutivo y gracias a todos vosotros que lo habéis hecho posible, hemos llenado el Teatro Lara de música y bailes.</p>\n        <p>Este año han colaborado con nosotros: La Agrupación Gallega Rosalía de Castro, el coro Awen, y los bailarines irlandeses Trebolinas y Peaky Dancers.</p>\n        <p>Muchas gracias a todos por un domingo mágico en Madrid.</p>"
        },
        {
            "date": "08 SEP 2023",
            "title": "II Festival Folk de Medinaceli",
            "venue": "Medinaceli",
            "poster": "recursos/conciertos/2023-09-08-medinaceli.jpg",
            "description": "<p>Talisker Band inaugura el II Festival Folk de Medinaceli, donde compartimos escenario con Milladoiro.</p>\n        <p>Una experiencia inolvidable en un lugar mágico lleno de historia y música.</p>"
        },
        {
            "date": "21 JUL 2023",
            "title": "Fiestas de Santorcaz",
            "venue": "Santorcaz",
            "poster": "recursos/conciertos/2023-07-21-santorcaz.jpg",
            "description": "<p>Nuestros amigos de Santorcaz nos invitaron a participar en las fiestas del verano de 2023.</p>\n        <p>Una noche espectacular con un público increíble. ¡Gracias Santorcaz!</p>"
        },
        {
            "date": "08 JUN 2023",
            "title": "Sala Galileo Galilei - Presentación Medinaceli Folk",
            "venue": "Madrid",
            "poster": "recursos/conciertos/2023-06-08-galileo.jpg",
            "description": "<p>Concierto para presentar el segundo Festival Folk de Medinaceli donde, gracias a la fundación DEARTE, dimos el concierto de inauguración.</p>\n        <p>Una noche memorable en la emblemática Sala Galileo Galilei.</p>"
        },
        {
            "date": "25 MAR 2023",
            "title": "Concierto en Habemus",
            "venue": "Daganzo de Arriba, Madrid",
            "poster": "recursos/conciertos/2023-03-25-habemus.jpg",
            "description": "<p>Concierto de Talisker Band en Habemus Bar de Daganzo de Arriba.</p>\n        <p>Una noche de aforo muy limitado en la que también estrenamos en directo nuestra versión Celtic Blues.</p>"
        },
        {
            "date": "17 MAR 2023",
            "title": "Fiesta de San Patricio - The Beer Temple",
            "venue": "Madrid",
            "poster": "recursos/conciertos/2023-03-17-san-patricio.jpg",
            "description": "<p>Celebramos San Patricio con nuestros amigos en \"El Templo de la Cerveza\" donde nos tratan como en nuestra casa.</p>\n        <p>Esperamos repetir muy pronto en este PUB. Estar atentos a nuestros próximos conciertos.</p>"
        },
        {
            "date": "03 MAR 2023",
            "title": "Centro Cultural Eduardo Úrculo",
            "venue": "Madrid",
            "poster": "recursos/conciertos/2023-03-03-urculo.jpg",
            "description": "<p>De nuevo nos subimos al escenario con nuestros amigos de la Agrupación Rosalía de Castro y el Coro Awen y nuevamente colgamos el cartel de \"No Hay Entradas\".</p>\n        <p>Muchas gracias a todos por hacer posible este sueño.</p>"
        }
    ],
    "concerts-2022": [
        {
            "date": "23 DIC 2022",
            "title": "El Chiringuito de Tomy",
            "venue": "Móstoles",
            "poster": "recursos/conciertos/2022-12-23-chiringuito-tomy.jpg",
            "description": "<p>No podíamos cerrar 2022 sin un concierto de Navidad y lo organizó nuestro amigo Tomy en su Chiringuito de Móstoles donde esperamos volver este verano.</p>\n        <p>¡Gracias por una noche increíble!</p>"
        },
        {
            "date": "23 OCT 2022",
            "title": "Teatro Lara",
            "venue": "Madrid",
            "poster": "recursos/conciertos/2022-10-23-teatro-lara.jpg",
            "description": "<p>Aquí vio la luz la primera gran producción de Talisker Band y nos acompañaron nuestros amigos de Rosalía de Castro y el coro Awen.</p>\n        <p>Cincuenta y tres artistas sobre el escenario y colgamos el cartel de \"No hay entradas\". Muchas gracias Madrid.</p>"
        },
        {
            "date": "24 JUN 2022",
            "title": "XVII Festival Almenara",
            "venue": "Madrid",
            "poster": "recursos/conciertos/2022-06-24-festival-almenara.jpg",
            "description": "<p>Después del parón por la pandemia del COVID, Radio Almenara retoma la organización del festival de música y cuenta con nosotros.</p>\n        <p>Muchas gracias amigos.</p>"
        },
        {
            "date": "07 MAY 2022",
            "title": "Theatre Club",
            "venue": "Villarrobledo",
            "poster": "recursos/conciertos/2022-05-07-theatre-club.jpg",
            "description": "<p>Un concierto que no olvidaremos jamás.</p>\n        <p>Muchas gracias Villarrobledo.</p>"
        },
        {
            "date": "19 MAR 2022",
            "title": "Amor al Plato - San Patricio",
            "venue": "Madrid",
            "poster": "recursos/conciertos/2022-03-19-amor-al-plato.jpg",
            "description": "<p>Celebramos el día de San Patricio con un concierto donde ya no cabía un alfiler.</p>\n        <p>Una noche llena de música irlandesa y celebración.</p>"
        },
        {
            "date": "25 FEB 2022",
            "title": "Espacio Bellas Vistas",
            "venue": "Madrid",
            "poster": "recursos/conciertos/2022-02-25-bellas-vistas.jpg",
            "description": "<p>Tarde musical con nuestros amigos de Tetuán.</p>\n        <p>Un encuentro lleno de música y buena compañía.</p>"
        },
        {
            "date": "19 FEB 2022",
            "title": "Sala Héroe",
            "venue": "Madrid",
            "poster": "recursos/conciertos/2022-02-19-sala-heroe.jpg",
            "description": "<p>Primer concierto con los gaiteros de Rosalía de Castro.</p>\n        <p>El inicio de una colaboración que se convertiría en algo muy especial.</p>"
        }
    ],
    "concerts-2021": [
        {
            "date": "18 DIC 2021",
            "title": "Galería Sara Caso",
            "venue": "Madrid",
            "poster": "recursos/conciertos/2021-12-18-galeria-sara-caso.jpg",
            "description": "<p>Colgamos el cartel de \"No hay entradas\".</p>\n        <p>Una noche mágica cerrando nuestro año de estreno por todo lo alto.</p>"
        },
        {
            "date": "16 DIC 2021",
            "title": "Envera - Debut de Talisker Band",
            "venue": "Madrid",
            "poster": "recursos/conciertos/2021-12-16-envera.jpg",
            "description": "<p>Debut de Talisker Band. Una noche mágica con un público maravilloso.</p>\n        <p>Este fue el comienzo de nuestra aventura, y nunca olvidaremos la emoción de pisar el escenario por primera vez como Talisker Band.</p>"
        }
    ]
};
// FIN DATOS GENERADOS DE CONCIERTOS

// ========================================
// CARGAR CONCIERTOS EN LA PÁGINA
// ========================================
// Esta función carga los conciertos de un año específico
function loadConcerts(concerts, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = concerts.map((concert, index) => `
        <button type="button" class="past-show-card" data-concert-target="${containerId}" data-concert-index="${index}">
            <span class="past-show-media">
                <img src="${concert.poster}"
                     alt="Cartel o imagen de ${concert.title}"
                     class="past-show-thumbnail"
                     loading="lazy"
                     decoding="async">
            </span>
            <span class="past-show-content">
                <span class="past-show-date">${concert.date}</span>
                <span class="past-show-title">${concert.title}</span>
                <span class="past-show-venue">${concert.venue}</span>
                <span class="past-show-hint">Ver imagen y detalles</span>
            </span>
        </button>
    `).join('');
    container.dataset.loaded = 'true';

    const count = container.closest('.year-accordion')?.querySelector('[data-year-count]');
    if (count) {
        count.textContent = ` • ${concerts.length} ${concerts.length === 1 ? 'actuación' : 'actuaciones'}`;
    }
}

// ========================================
// ACORDEÓN DE AÑOS
// ========================================
// Abre y cierra los años en la sección de conciertos
function toggleYear(header) {
    const content = header.nextElementSibling;
    const isActive = header.classList.contains('active');
    
    // Cerrar todos los acordeones
    document.querySelectorAll('.year-header').forEach(h => {
        h.classList.remove('active');
        h.setAttribute('aria-expanded', 'false');
        h.nextElementSibling.classList.remove('active');
        h.nextElementSibling.setAttribute('inert', '');
    });
    
    // Abrir el seleccionado si no estaba activo
    if (!isActive) {
        const concertContainer = content.querySelector('.past-shows-grid');
        if (concertContainer && concertContainer.dataset.loaded !== 'true') {
            loadConcerts(allConcerts[concertContainer.id] || [], concertContainer.id);
        }

        header.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
        content.removeAttribute('inert');
        content.classList.add('active');
    }
}

// ========================================
// MODAL DE CONCIERTOS
// ========================================
const modal = document.getElementById('concertModal');
const posterModal = document.getElementById('posterModal');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let lastFocusedElement = null;

function trapFocus(event, container) {
    const focusable = [...container.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )].filter(element => element.offsetParent !== null);

    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
    }
}

function syncBodyScrollLock() {
    const shouldLock =
        document.body.classList.contains('menu-open') ||
        (modal && modal.classList.contains('active')) ||
        (posterModal && posterModal.classList.contains('active'));

    document.body.style.overflow = shouldLock ? 'hidden' : 'auto';
}


// Abrir el modal con la información del concierto
function openModal(containerId, index) {
    const concerts = allConcerts[containerId];
    if (!concerts || !concerts[index] || !modal) return;
    const concert = concerts[index];
    
    document.getElementById('modalDate').textContent = concert.date;
    document.getElementById('modalTitle').textContent = concert.title;
    document.getElementById('modalVenue').textContent = concert.venue;
    document.getElementById('modalDescription').innerHTML = concert.description;
    const modalPoster = document.getElementById('modalPoster');
    if (modalPoster) {
        modalPoster.hidden = !concert.poster;
        modalPoster.alt = concert.poster ? `Cartel o imagen de ${concert.title}` : '';
        modalPoster.onerror = () => {
            modalPoster.hidden = true;
        };
        if (concert.poster) {
            modalPoster.src = concert.poster;
        } else {
            modalPoster.removeAttribute('src');
        }
    }
    lastFocusedElement = document.activeElement;
    modal.removeAttribute('inert');
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    syncBodyScrollLock();
    modal.querySelector('[data-close-concert-modal]')?.focus();
}

// Cerrar el modal
function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    modal.setAttribute('inert', '');
    syncBodyScrollLock();
    lastFocusedElement?.focus();
}

// Cerrar modal al hacer click fuera

// Cerrar modal con el botón X - esperar a que el DOM esté listo

// ========================================
// SCROLL SUAVE
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
        }
    });
});

// ========================================
// MENÚ HAMBURGUESA (MÓVIL)
// ========================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const mobileNavigation = window.matchMedia('(max-width: 1024px)');

function syncMobileMenuAccessibility() {
    if (!navMenu) return;

    if (mobileNavigation.matches && !navMenu.classList.contains('active')) {
        navMenu.setAttribute('inert', '');
    } else {
        navMenu.removeAttribute('inert');
    }
}

function closeMobileMenu() {
    if (!navMenu || !hamburger) return;

    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
    syncMobileMenuAccessibility();
    syncBodyScrollLock();
}

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', navMenu.classList.contains('active') ? 'true' : 'false');
        document.body.classList.toggle('menu-open', navMenu.classList.contains('active'));
        syncMobileMenuAccessibility();
        syncBodyScrollLock();
    });
}

syncMobileMenuAccessibility();

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        closeMobileMenu();
    });
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
        closeMobileMenu();
    } else {
        syncMobileMenuAccessibility();
    }
});

// ========================================
// EFECTO NAVBAR AL HACER SCROLL
// ========================================
const navbar = document.querySelector('.navbar');
const updateNavbar = () => navbar?.classList.toggle('scrolled', window.scrollY > 12);
window.addEventListener('scroll', updateNavbar, { passive: true });
updateNavbar();

// ========================================
// CARRUSELES HORIZONTALES
// ========================================
function initCarousel(carousel) {
    const track = carousel.querySelector('.carousel-track');
    const prevButton = carousel.querySelector('.carousel-button-prev');
    const nextButton = carousel.querySelector('.carousel-button-next');

    if (!track || !prevButton || !nextButton) return;

    const getStep = () => {
        const firstCard = track.children[0];
        if (!firstCard) return 320;

        const gap = parseFloat(window.getComputedStyle(track).gap || '24');
        return firstCard.getBoundingClientRect().width + gap;
    };

    const scrollToNext = (direction = 1) => {
        const step = getStep();
        const maxScroll = track.scrollWidth - track.clientWidth;
        const target = track.scrollLeft + (step * direction);

        if (direction > 0 && track.scrollLeft >= maxScroll - 8) {
            track.scrollTo({ left: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
            return;
        }

        if (direction < 0 && track.scrollLeft <= 8) {
            track.scrollTo({ left: maxScroll, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
            return;
        }

        track.scrollTo({ left: target, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    };

    prevButton.addEventListener('click', () => scrollToNext(-1));
    nextButton.addEventListener('click', () => scrollToNext(1));
}

// ========================================
// CARGAR TODO AL INICIAR LA PÁGINA
// ========================================
window.addEventListener('DOMContentLoaded', () => {
    // Los listados históricos se renderizan al abrir cada año para aligerar la carga inicial.
    Object.entries(allConcerts).forEach(([containerId, concerts]) => {
        const count = document.getElementById(containerId)
            ?.closest('.year-accordion')
            ?.querySelector('[data-year-count]');
        if (count) {
            count.textContent = ` • ${concerts.length} ${concerts.length === 1 ? 'actuación' : 'actuaciones'}`;
        }
    });

    document.querySelectorAll('[data-carousel]').forEach(initCarousel);
});

document.addEventListener('click', event => {
    const mediaTrigger = event.target.closest('[data-embed-src]');
    if (mediaTrigger && !event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey && event.button === 0) {
        event.preventDefault();
        const iframe = document.createElement('iframe');
        iframe.src = mediaTrigger.dataset.embedSrc;
        iframe.title = mediaTrigger.dataset.embedTitle;
        iframe.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
        iframe.referrerPolicy = 'strict-origin-when-cross-origin';
        iframe.allowFullscreen = true;
        mediaTrigger.replaceWith(iframe);
        iframe.focus();
        return;
    }

    const concertTrigger = event.target.closest('[data-concert-target]');
    if (concertTrigger) {
        const containerId = concertTrigger.dataset.concertTarget;
        const concerts = allConcerts[containerId] || [];
        const index = concertTrigger.dataset.concertTitle
            ? concerts.findIndex(concert => concert.title === concertTrigger.dataset.concertTitle)
            : Number(concertTrigger.dataset.concertIndex);

        openModal(containerId, index);
        return;
    }

    const posterTrigger = event.target.closest('[data-poster-src]');
    if (posterTrigger) {
        openPosterModal(posterTrigger.dataset.posterSrc, posterTrigger.dataset.posterTitle);
        return;
    }

    const yearTrigger = event.target.closest('[data-year-toggle]');
    if (yearTrigger) {
        toggleYear(yearTrigger);
        return;
    }

    if (event.target.closest('[data-close-concert-modal]')) {
        closeModal();
        return;
    }

    if (event.target.closest('[data-close-poster-modal]')) {
        closePosterModal();
        return;
    }

    if (event.target === modal) {
        closeModal();
        return;
    }

    if (event.target === posterModal) {
        closePosterModal();
    }
});

document.addEventListener('keydown', event => {
    if (event.key === 'Tab') {
        const activeDialog = posterModal?.classList.contains('active')
            ? posterModal
            : modal?.classList.contains('active') ? modal : null;
        const activeMenu = navMenu?.classList.contains('active')
            ? document.querySelector('.nav-container')
            : null;
        if (activeDialog) {
            trapFocus(event, activeDialog);
        } else if (activeMenu) {
            trapFocus(event, activeMenu);
        }
        return;
    }

    if (event.key !== 'Escape') return;

    if (posterModal && posterModal.classList.contains('active')) {
        closePosterModal();
        return;
    }

    if (modal && modal.classList.contains('active')) {
        closeModal();
        return;
    }

    if (navMenu?.classList.contains('active')) {
        closeMobileMenu();
        hamburger?.focus();
    }
});
// ========================================
// MODAL PARA CARTELES DE PRÓXIMOS CONCIERTOS
// ========================================
// Abrir modal con el cartel
function openPosterModal(imageSrc, title) {
    if (!posterModal) return;

    document.getElementById('posterImage').src = imageSrc;
    document.getElementById('posterImage').alt = title;
    document.getElementById('posterTitle').textContent = title;
    lastFocusedElement = document.activeElement;
    posterModal.removeAttribute('inert');
    posterModal.classList.add('active');
    posterModal.setAttribute('aria-hidden', 'false');
    syncBodyScrollLock();
    posterModal.querySelector('[data-close-poster-modal]')?.focus();
}

// Cerrar modal del cartel
function closePosterModal() {
    if (!posterModal) return;

    posterModal.classList.remove('active');
    posterModal.setAttribute('aria-hidden', 'true');
    posterModal.setAttribute('inert', '');
    syncBodyScrollLock();
    lastFocusedElement?.focus();
}
