document.addEventListener('DOMContentLoaded', function() {
    // Configuración de Lottie
    const animation = lottie.loadAnimation({
        container: document.getElementById('logo-container'), // Contenedor
        renderer: 'svg',
        loop: false, // No repetir la animación
        autoplay: true,
        path: './animations/animation.json' // Ruta al archivo JSON de Lottie
    });

    // Detener la animación al final de la primera reproducción
    animation.addEventListener('complete', function() {
        const totalFrames = animation.totalFrames; // Obtener el número total de frames
        animation.goToAndStop(totalFrames - 1, true); // Detener la animación en el último frame
    });
});


