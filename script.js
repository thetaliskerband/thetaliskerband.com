/* =====================================================
   TALISKER BAND - JAVASCRIPT
   ===================================================== 
   
   GUÍA PARA EDITAR:
   1. Para añadir conciertos: busca "concerts2025", "concerts2024", etc
   2. Para cambiar comportamiento del menú: busca "Menu hamburguesa"
   3. Para el modal de conciertos: busca "Modal functionality"
*/

// ========================================
// CONCIERTOS DE 2025
// ========================================
const concerts2025 = [
    {
        date: "8 NOV 2025",
        title: "Mercado de Motores",
        venue: "Madrid",
        poster: "recursos/conciertos/2025-11-08-mercado-motores.jpg", // Cambia por tu foto real
        description: `<p>Volvimos al emblemático Mercado de Motores de Madrid para cerrar el año con música celta y folk.</p>
        <p>Una tarde increíble compartiendo nuestra música con el público madrileño.</p>`
    },
    {
        date: "11 OCT 2025",
        title: "Mercado Cervantino",
        venue: "Alcalá de Henares",
        poster: "recursos/conciertos/2025-10-11-mercado-cervantino.jpg",
        description: `<p>Participamos en el tradicional Mercado Cervantino de Alcalá de Henares, una de las citas culturales más importantes de la Comunidad de Madrid.</p>
        <p>Ambientamos las calles de la ciudad natal de Cervantes con nuestra música tradicional.</p>`
    },
    {
        date: "8 OCT 2025",
        title: "Fiestas del Barrio del Pilar",
        venue: "Madrid",
        poster: "recursos/conciertos/2025-10-08-fiestas-pilar.jpg",
        description: `<p>Celebramos las fiestas del Barrio del Pilar, uno de los eventos más tradicionales de Madrid.</p>
        <p>Una jornada llena de música y celebración con nuestros vecinos madrileños.</p>`
    },
    {
        date: "20-21 SEP 2025",
        title: "Mercado Medieval de Lasarte-Oria",
        venue: "Guipúzcoa",
        poster: "recursos/conciertos/2025-09-20-lasarte-oria.jpg",
        description: `<p>Dos días de música medieval y celta en el País Vasco, en el mercado medieval de Lasarte-Oria.</p>
        <p>Una experiencia única transportando al público a la época medieval con nuestra música tradicional.</p>`
    },
    {
        date: "12 SEP 2025",
        title: "Magiceltica",
        venue: "Vallecas, Madrid",
        poster: "recursos/conciertos/2025-09-12-magiceltica.jpg",
        description: `<p>Festival Magiceltica en Vallecas, uno de los eventos de música celta más importantes de Madrid.</p>
        <p>Compartimos escenario con grandes artistas del panorama folk y celta.</p>`
    },
    {
        date: "28 JUN 2025",
        title: "Concierto en Torneros de la Valdería",
        venue: "León",
        poster: "recursos/conciertos/2025-06-28-torneros.jpg",
        description: `<p>Actuación especial en el pequeño pero encantador pueblo de Torneros de la Valdería en León.</p>
        <p>Una noche mágica bajo las estrellas con la mejor música tradicional.</p>`
    },
    {
        date: "14 JUN 2025",
        title: "Festival Celtasur",
        venue: "Cúllar Vega, Granada",
        poster: "recursos/conciertos/2025-06-14-celtasur.jpg",
        description: `<p>Participamos en el Festival Celtasur en Cúllar Vega, llevando nuestra música al sur de España.</p>
        <p>Una experiencia increíble compartiendo la cultura celta en Andalucía.</p>`
    },
    {
        date: "24 MAY 2025",
        title: "Festival Lugnastar VI Edición",
        venue: "Villastar, Teruel",
        poster: "recursos/conciertos/2025-05-24-lugnastar.jpg",
        description: `<p>Sexta edición del Festival Lugnastar en Villastar, Teruel. Un festival dedicado a la música folk y celta.</p>
        <p>Disfrutamos de un fin de semana inolvidable en tierras turolenses.</p>`
    },
    {
        date: "17 MAY 2025",
        title: "Mercado Medieval de Berango",
        venue: "Berango, País Vasco",
        poster: "recursos/conciertos/2025-05-17-berango.jpg",
        description: `<p>Volvimos al País Vasco para participar en el mercado medieval de Berango.</p>
        <p>Una jornada llena de música, historia y tradición en un entorno único.</p>`
    },
    {
        date: "11 MAY 2025",
        title: "Mercado de Motores",
        venue: "Madrid",
        poster: "recursos/conciertos/2025-05-11-mercado-motores.jpg",
        description: `<p>Nueva actuación en el Mercado de Motores, uno de nuestros lugares favoritos en Madrid.</p>
        <p>El público respondió de manera espectacular a nuestra música.</p>`
    },
    {
        date: "5 MAY 2025",
        title: "Aparición en 'La Familia de la Tele'",
        venue: "RTVE",
        poster: "recursos/conciertos/2025-05-05-rtve.jpg",
        description: `<p>Participamos en el programa "La Familia de la Tele" de RTVE, llevando nuestra música a miles de hogares españoles.</p>
        <p>Una experiencia televisiva única que nos permitió dar a conocer la música celta a un público más amplio.</p>`
    },
    {
        date: "17 MAR 2025",
        title: "Concierto San Patricio - The Beer Temple",
        venue: "Madrid",
        poster: "recursos/conciertos/2025-03-17-san-patricio.jpg",
        description: `<p>Celebramos San Patricio en The Beer Temple, nuestro lugar habitual para esta festividad tan especial.</p>
        <p>Una noche llena de música irlandesa, baile y celebración con un público entregado.</p>`
    },
    {
        date: "24 ENE 2025",
        title: "Concierto Privado",
        venue: "El Escorial",
        poster: "recursos/conciertos/2025-01-24-escorial.jpg",
        description: `<p>Concierto privado en el histórico municipio de El Escorial.</p>
        <p>Una actuación íntima en un entorno privilegiado con vistas al Real Monasterio.</p>`
    },
    {
        date: "5 ENE 2025",
        title: "Cabalgata de Reyes de Hortaleza",
        venue: "Madrid",
        poster: "recursos/conciertos/2025-01-05-cabalgata.jpg",
        description: `<p>Abrimos el año 2025 participando en la tradicional Cabalgata de Reyes del distrito de Hortaleza en Madrid.</p>
        <p>Una noche mágica trayendo ilusión a niños y familias con nuestra música.</p>`
    }
];

// ========================================
// CONCIERTOS DE 2024
// ========================================
const concerts2024 = [
    {
        date: "26 DIC 2024",
        title: "Galileo Galilei - Concierto por la Cabalgata participativa de Hortaleza",
        venue: "Madrid",
        poster: "recursos/conciertos/2024-12-26-galileo-galilei.jpg",
        description: `<p>¡Muchas gracias por venir a la sala Galileo Galilei! Nos lo pasamos en grande compartiendo escenario con la gente tan talentosa que vino, desde grupos hasta cómicos, fue una noche espectacular.</p>
        <p>Veros a todos tan entusiasmados y entregados mientras bailabais y os divertíais al son de Talisker Band, fue el mejor regalo de navidad que nos podríais haber dado. ¡Muchas gracias por tanto y por muchas más!</p>`
    },
    {
        date: "14 DIC 2024",
        title: "Festival Navideño en Manoteras",
        venue: "Parque El Encuentro, Madrid",
        poster: "recursos/conciertos/2024-12-14-manoteras.jpg",
        description: `<p>Queremos daros las gracias por venir al concierto en el parque El Encuentro. El mercado navideño fue un toque especial junto a la máquina de nieve.</p>
        <p>Aunque hizo bastante frío, ver vuestro entusiasmo y que os quedáseis hasta el final, lo compensó con creces y nos lo pasamos muy bien como siempre en Talisker. Gracias por todo y... ¡Nos vemos en la próxima!</p>`
    },
    {
        date: "26 OCT 2024",
        title: "Los Vermúconciertos de Kulture Market",
        venue: "Madrid",
        poster: "recursos/conciertos/2024-10-26-kulture-market.jpg",
        description: `<p>Muchísimas gracias a todos por venir a este concierto. Estuvimos muy cómodos tocando, el sonido fue increíble, y nos tratasteis de maravilla.</p>
        <p>Esperamos volver a compartir juntos momentos así.</p>`
    },
    {
        date: "19 OCT 2024",
        title: "Mercado de Motores",
        venue: "Madrid",
        poster: "recursos/conciertos/2024-10-19-mercado-motores.jpg",
        description: `<p>Hemos repetido en un sitio maravilloso, y al igual que la última vez, lo mejor fue el gran público que vino y se quedó durante todo el concierto, bailando, cantando y divirtiéndose.</p>
        <p>Esperamos repetir pronto y volver a veros a todos igual de felices y contentos que después de este concierto.</p>
        <p>No podemos olvidarnos del técnico de sonido que también repitió con nosotros, y lo hizo estupendamente. Sabemos que no es fácil sonorizarnos a tantos, pero él consiguió que todo funcionase en tiempo récord. Gracias por todo.</p>`
    },
    {
        date: "13 JUL 2024",
        title: "II Encuentro de Gaiteros y Dulzaineros",
        venue: "Madrid",
        poster: "recursos/conciertos/2024-07-13-gaiteros-dulzaineros.jpg",
        description: `<p>Muy agradecidos por haber podido tocar en un sitio tan bonito y tan lleno de música y cultura folk. Fue un placer escuchar las piezas de todos los maravillosos músicos que estuvieron tocando a lo largo de la tarde.</p>
        <p>Agradecemos también la hospitalidad de todos los involucrados en hacer de esto un encuentro tan especial. ¡Con ganas de volver a tocar allí!</p>`
    },
    {
        date: "8 JUN 2024",
        title: "Festival Lugnastar V Edición",
        venue: "Villastar, Teruel",
        poster: "recursos/conciertos/2024-06-08-lugnastar.jpg",
        description: `<p>La experiencia de tocar en Villastar fue espectacular. A pesar de que el tiempo no acompañó, os quedasteis con nosotros y disfrutamos de un rato increíble, tanto nosotros como vosotros.</p>
        <p>Muchísimas gracias por todo y esperamos vernos pronto.</p>`
    },
    {
        date: "14 ABR 2024",
        title: "Huerta de Tetuán",
        venue: "Madrid",
        poster: "recursos/conciertos/2024-04-14-huerta-tetuan.jpg",
        description: `<p>¡Fue un placer tocar en la Huerta de Tetuán! La acogida fue estupenda y fue un concierto muy, muy animado.</p>
        <p>Pasamos una mañana estupenda, seguida de una comida muy agradable junto a toda la gente del sitio. ¡Muchas gracias por todo!</p>`
    },
    {
        date: "10 MAR 2024",
        title: "Mercado de Motores",
        venue: "Madrid",
        poster: "recursos/conciertos/2024-03-10-mercado-motores.jpg",
        description: `<p>Muchas gracias a todos los que vinisteis a vernos al Mercado de Motores, fue un concierto espectacular donde disfrutamos todos, tanto nosotros tocando con un público tan increíble, como vosotros, escuchando nuestra música y danzando a nuestro ritmo.</p>
        <p>La belleza del sitio acompañó al concierto, y a pesar del mal tiempo que hubo, os quedasteis con nosotros de principio a fin. ¡Gracias, miles de gracias a todos!</p>`
    },
    {
        date: "23 ENE 2024",
        title: "Auditorio de CCOO",
        venue: "Madrid",
        poster: "recursos/conciertos/2024-01-23-auditorio-ccoo.jpg",
        description: `<p>Tocar en el Auditorio de CCOO fue una experiencia increíble, y compartir escenario con Alicia Ramos fue un verdadero placer.</p>
        <p>Estamos muy agradecidos de poder contar con vosotros en nuestros conciertos, y gracias a los espectaculares músicos y bailarines que colaboran con nosotros.</p>`
    }
];

// ========================================
// CONCIERTOS DE 2023
// ========================================
const concerts2023 = [
    {
        date: "22 DIC 2023",
        title: "Plaza de la Remonta",
        venue: "Madrid",
        poster: "recursos/conciertos/2023-12-22-plaza-remonta.jpg",
        description: `<p>Queremos agradecer al Ayuntamiento de Madrid la oportunidad que nos ha dado de poder felicitar las Navidades a todo nuestro público con un gran concierto en una de las plazas más grandes de nuestra capital.</p>
        <p>Y a todos vosotros por llenar este emblemático espacio a pesar del intenso frío que hizo.</p>`
    },
    {
        date: "29 OCT 2023",
        title: "Teatro Lara de Madrid",
        venue: "Madrid",
        poster: "recursos/conciertos/2023-10-29-teatro-lara.jpg",
        description: `<p>Por segundo año consecutivo y gracias a todos vosotros que lo habéis hecho posible, hemos llenado el Teatro Lara de música y bailes.</p>
        <p>Este año han colaborado con nosotros: La Agrupación Gallega Rosalía de Castro, el coro Awen, y los bailarines irlandeses Trebolinas y Peaky Dancers.</p>
        <p>Muchas gracias a todos por un domingo mágico en Madrid.</p>`
    },
    {
        date: "08 SEP 2023",
        title: "II Festival Folk de Medinaceli",
        venue: "Medinaceli",
        poster: "recursos/conciertos/2023-09-08-medinaceli.jpg",
        description: `<p>Talisker Band inaugura el II Festival Folk de Medinaceli, donde compartimos escenario con Milladoiro.</p>
        <p>Una experiencia inolvidable en un lugar mágico lleno de historia y música.</p>`
    },
    {
        date: "21 JUL 2023",
        title: "Fiestas de Santorcaz",
        venue: "Santorcaz",
        poster: "recursos/conciertos/2023-07-21-santorcaz.jpg",
        description: `<p>Nuestros amigos de Santorcaz nos invitaron a participar en las fiestas del verano de 2023.</p>
        <p>Una noche espectacular con un público increíble. ¡Gracias Santorcaz!</p>`
    },
    {
        date: "08 JUN 2023",
        title: "Sala Galileo Galilei - Presentación Medinaceli Folk",
        venue: "Madrid",
        poster: "recursos/conciertos/2023-06-08-galileo.jpg",
        description: `<p>Concierto para presentar el segundo Festival Folk de Medinaceli donde, gracias a la fundación DEARTE, dimos el concierto de inauguración.</p>
        <p>Una noche memorable en la emblemática Sala Galileo Galilei.</p>`
    },
    {
        date: "17 MAR 2023",
        title: "Fiesta de San Patricio - The Beer Temple",
        venue: "Madrid",
        poster: "recursos/conciertos/2023-03-17-san-patricio.jpg",
        description: `<p>Celebramos San Patricio con nuestros amigos en "El Templo de la Cerveza" donde nos tratan como en nuestra casa.</p>
        <p>Esperamos repetir muy pronto en este PUB. Estar atentos a nuestros próximos conciertos.</p>`
    },
    {
        date: "03 MAR 2023",
        title: "Centro Cultural Eduardo Úrculo",
        venue: "Madrid",
        poster: "recursos/conciertos/2023-03-03-urculo.jpg",
        description: `<p>De nuevo nos subimos al escenario con nuestros amigos de la Agrupación Rosalía de Castro y el Coro Awen y nuevamente colgamos el cartel de "No Hay Entradas".</p>
        <p>Muchas gracias a todos por hacer posible este sueño.</p>`
    }
];

// ========================================
// CONCIERTOS DE 2022
// ========================================
const concerts2022 = [
    {
        date: "23 DIC 2022",
        title: "El Chiringuito de Tomy",
        venue: "Móstoles",
        poster: "recursos/conciertos/2022-12-23-chiringuito-tomy.jpg",
        description: `<p>No podíamos cerrar 2022 sin un concierto de Navidad y lo organizó nuestro amigo Tomy en su Chiringuito de Móstoles donde esperamos volver este verano.</p>
        <p>¡Gracias por una noche increíble!</p>`
    },
    {
        date: "OCT 2022",
        title: "Teatro Lara",
        venue: "Madrid",
        poster: "recursos/conciertos/2022-10-teatro-lara.jpg",
        description: `<p>Aquí vio la luz la primera gran producción de Talisker Band y nos acompañaron nuestros amigos de Rosalía de Castro y el coro Awen.</p>
        <p>Cincuenta y tres artistas sobre el escenario y colgamos el cartel de "No hay entradas". Muchas gracias Madrid.</p>`
    },
    {
        date: "SEP 2022",
        title: "Festival de Almenara",
        venue: "Madrid",
        poster: "recursos/conciertos/2022-09-festival-almenara.jpg",
        description: `<p>Después del parón por la pandemia del COVID, Radio Almenara retoma la organización del festival de música y cuenta con nosotros.</p>
        <p>Muchas gracias amigos.</p>`
    },
    {
        date: "MAR 2022",
        title: "Club Theatre",
        venue: "Villarrobledo",
        poster: "recursos/conciertos/2022-03-club-theatre.jpg",
        description: `<p>Un concierto que no olvidaremos jamás.</p>
        <p>Muchas gracias Villarrobledo.</p>`
    },
    {
        date: "17 MAR 2022",
        title: "Amor al Plato - San Patricio",
        venue: "Madrid",
        poster: "recursos/conciertos/2022-03-17-amor-al-plato.jpg",
        description: `<p>Celebramos el día de San Patricio con un concierto donde ya no cabía un alfiler.</p>
        <p>Una noche llena de música irlandesa y celebración.</p>`
    },
    {
        date: "25 FEB 2022",
        title: "Espacio Bellas Vistas",
        venue: "Madrid",
        poster: "recursos/conciertos/2022-02-25-bellas-vistas.jpg",
        description: `<p>Tarde musical con nuestros amigos de Tetuán.</p>
        <p>Un encuentro lleno de música y buena compañía.</p>`
    },
    {
        date: "19 FEB 2022",
        title: "Sala Héroe",
        venue: "Madrid",
        poster: "recursos/conciertos/2022-02-19-sala-heroe.jpg",
        description: `<p>Primer concierto con los gaiteros de Rosalía de Castro.</p>
        <p>El inicio de una colaboración que se convertiría en algo muy especial.</p>`
    }
];

const concerts2021 = [
    {
        date: "18 DIC 2021",
        title: "Galería Sara Caso",
        venue: "Madrid",
        poster: "recursos/conciertos/2021-12-18-galeria-sara-caso.jpg",
        description: `<p>Colgamos el cartel de "No hay entradas".</p>
        <p>Una noche mágica cerrando nuestro año de estreno por todo lo alto.</p>`
    },
    {
        date: "16 DIC 2021",
        title: "Envera - Debut de Talisker Band",
        venue: "Madrid",
        poster: "recursos/conciertos/2021-12-16-envera.jpg",
        description: `<p>Debut de Talisker Band. Una noche mágica con un público maravilloso.</p>
        <p>Este fue el comienzo de nuestra aventura, y nunca olvidaremos la emoción de pisar el escenario por primera vez como Talisker Band.</p>`
    }
];

// ========================================
// CARGAR CONCIERTOS EN LA PÁGINA
// ========================================
// Esta función carga los conciertos de un año específico
function loadConcerts(concerts, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = concerts.map((concert, index) => `
        <div class="past-show-card" onclick="openModal('${containerId}', ${index})">
            <div class="past-show-content">
                <div class="past-show-date">${concert.date}</div>
                <h3 class="past-show-title">${concert.title}</h3>
                <p class="past-show-venue">${concert.venue}</p>
            </div>
        </div>
    `).join('');
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
        h.nextElementSibling.classList.remove('active');
    });
    
    // Abrir el seleccionado si no estaba activo
    if (!isActive) {
        header.classList.add('active');
        content.classList.add('active');
    }
}

// ========================================
// MODAL DE CONCIERTOS
// ========================================
const modal = document.getElementById('concertModal');

// Objeto para almacenar todos los conciertos
const allConcerts = {
    'concerts-2025': concerts2025,
    'concerts-2024': concerts2024,
    'concerts-2023': concerts2023,
    'concerts-2022': concerts2022,
    'concerts-2021': concerts2021
};

// Abrir el modal con la información del concierto
function openModal(containerId, index) {
    const concerts = allConcerts[containerId];
    const concert = concerts[index];
    
    document.getElementById('modalDate').textContent = concert.date;
    document.getElementById('modalTitle').textContent = concert.title;
    document.getElementById('modalVenue').textContent = concert.venue;
    document.getElementById('modalDescription').innerHTML = concert.description;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Cerrar el modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Cerrar modal al hacer click fuera
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

// Cerrar modal con el botón X - esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    const modalClose = document.querySelector('.modal-close');
    if (modalClose) {
        modalClose.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            closeModal();
        });
    }
    
    // Cerrar con tecla ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});

// ========================================
// SCROLL SUAVE
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ========================================
// MENÚ HAMBURGUESA (MÓVIL)
// ========================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ========================================
// EFECTO NAVBAR AL HACER SCROLL
// ========================================
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 0) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    }
});

// ========================================
// ANIMACIONES AL HACER SCROLL
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animaciones a las cards
document.querySelectorAll('.component-card, .past-show-card, .news-card, .featured-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ========================================
// FORMULARIO DE CONTACTO
// ========================================
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Aquí iría el código para enviar el email
        // Por ahora solo mostramos un mensaje
        alert('¡Mensaje enviado! Nos pondremos en contacto contigo pronto.');
        contactForm.reset();
    });
}

// ========================================
// CARGAR TODO AL INICIAR LA PÁGINA
// ========================================
window.addEventListener('DOMContentLoaded', () => {
    // Cargar conciertos de cada año
    loadConcerts(concerts2025, 'concerts-2025');
    loadConcerts(concerts2024, 'concerts-2024');
    loadConcerts(concerts2023, 'concerts-2023');
    loadConcerts(concerts2022, 'concerts-2022');
    loadConcerts(concerts2021, 'concerts-2021');
});
// ========================================
// MODAL PARA CARTELES DE PRÓXIMOS CONCIERTOS
// ========================================
const posterModal = document.getElementById('posterModal');

// Abrir modal con el cartel
function openPosterModal(imageSrc, title) {
    document.getElementById('posterImage').src = imageSrc;
    document.getElementById('posterTitle').textContent = title;
    posterModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Cerrar modal del cartel
function closePosterModal() {
    posterModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Cerrar al hacer click fuera
window.onclick = function(event) {
    if (event.target == posterModal) {
        closePosterModal();
    }
}