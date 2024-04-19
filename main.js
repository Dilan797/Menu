// Definición de la función closeAd
function closeAd() {
    document.getElementById('ad').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const closeIcon = document.getElementById('nav-close');
    const navLinks = document.querySelectorAll('.nav_link');
    const container = document.querySelector('.container_1');
    const header = document.querySelector('.header-bg');
    
    
    
    // Inicializar la posición de desplazamiento del contenedor
    container.scrollLeft = 0;
    
    function changeHeaderOnScroll() {
        if (window.scrollY > 0) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    }

    // Añadir listeners para el desplazamiento y ajuste del encabezado
    window.addEventListener('scroll', changeHeaderOnScroll);

    // Función para alternar la visibilidad del menú
    function toggleMenu() {
        if (navMenu.classList.contains('active')) {
            // Desactivar el menú y ocultarlo después de la animación
            navMenu.classList.remove('active');
            setTimeout(() => {
                navMenu.style.display = 'none';
            }, 300); // Asegúrate de que este temporizador coincida con la duración de la transición CSS
        } else {
            // Mostrar el menú y activar la escala
            navMenu.style.display = 'flex';
            requestAnimationFrame(() => {
                navMenu.classList.add('active');
            });
        }
    }
    
    // Resto del código...

    // Vincular la función toggleMenu con el evento click del botón hamburger
    hamburger.addEventListener('click', function() {
        toggleMenu();
    });

    // Vincular la función toggleMenu con el evento click del botón closeIcon
    closeIcon.addEventListener('click', function() {
        toggleMenu();
    });

    // Vincular la función toggleMenu con el evento click de cada navLink
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            toggleMenu();
        });
    });

    // Ajustar la visibilidad del menú en el cambio de tamaño de la ventana
    function adjustMenuVisibility() {
        if (window.innerWidth >= 768) {
            navMenu.style.display = 'none';
        }
    }

    window.addEventListener('resize', adjustMenuVisibility);
    adjustMenuVisibility();

    // Funciones para desplazamiento horizontal en el contenedor
    function scrollLeft() {
        container.scrollBy({ left: -100, behavior: 'smooth' });
    }

    function scrollRight() {
        container.scrollBy({ left: 100, behavior: 'smooth' });
    }

    document.querySelector('.left-arrow').addEventListener('click', scrollLeft);
    document.querySelector('.right-arrow').addEventListener('click', scrollRight);

    // Mostrar solo el contenedor de menú "Favoritos" si está presente
    const favoritesMenu = document.getElementById('menuFavoritos');
    if (favoritesMenu) {
        favoritesMenu.style.display = 'block';
    }

    // Manejo de clic en tarjetas para mostrar contenedores de menú relacionados
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            document.querySelectorAll('.menu-container').forEach(menu => menu.style.display = 'none');
            const targetMenuId = card.getAttribute('data-target');
            const targetMenu = document.getElementById(targetMenuId);
            if (targetMenu) {
                targetMenu.style.display = 'block';
            }
        });
    });
});