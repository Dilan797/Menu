document.addEventListener('DOMContentLoaded', function() {
    // Configuración de Lottie
    const logoContainer = document.getElementById('logo-container');
    if (logoContainer) {
        const animation = lottie.loadAnimation({
            container: logoContainer,
            renderer: 'svg',
            loop: false,
            autoplay: true,
            path: './animations/animation.json'
        });

        animation.addEventListener('complete', function() {
            animation.goToAndStop(animation.totalFrames - 1, true);
        });
    }

    // Configuración del Carrusel
    const carousel = document.querySelector('#myCarousel');
    if (carousel) {
        const carouselInner = carousel.querySelector('.carousel-inner');
        const items = carousel.querySelectorAll('.carousel-item');
        const prevBtn = carousel.querySelector('.carousel-control-prev');
        const nextBtn = carousel.querySelector('.carousel-control-next');
        
        let currentIndex = 0;
        const totalItems = items.length;

        function showSlide(index) {
            carouselInner.style.transform = `translateX(-${index * 100}%)`;
            items.forEach((item, i) => item.classList.toggle('active', i === index));
        }

        function moveSlide(direction) {
            currentIndex = (currentIndex + direction + totalItems) % totalItems;
            showSlide(currentIndex);
        }

        prevBtn.addEventListener('click', () => moveSlide(-1));
        nextBtn.addEventListener('click', () => moveSlide(1));

        // Autoplay opcional
        let autoplayInterval = setInterval(() => moveSlide(1), 6000);

        // Detener autoplay al interactuar con el carrusel
        carousel.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
        carousel.addEventListener('mouseleave', () => {
            autoplayInterval = setInterval(() => moveSlide(1), 6000);
        });
    }
}); 

