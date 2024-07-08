//Creamos un javascript nuevo para la opcion desplegable de 
//Nuestras sedes 
document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const navMenu = document.getElementById('nav-menu');

    console.log('DOM fully loaded and parsed');

    if (dropdownToggle) {
        console.log('Dropdown toggle found');
        dropdownToggle.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Dropdown toggle clicked');

            if (dropdownMenu.classList.contains('hidden')) {
                dropdownMenu.classList.remove('hidden');
                dropdownToggle.classList.remove('closed');
                dropdownToggle.classList.add('open');
                dropdownMenu.style.display = 'block'; // Asegúrate de mostrar el dropdown
                navMenu.style.height = `${navMenu.scrollHeight + dropdownMenu.scrollHeight}px`;
            } else {
                dropdownMenu.classList.add('hidden');
                dropdownToggle.classList.remove('open');
                dropdownToggle.classList.add('closed');
                dropdownMenu.style.display = 'none'; // Asegúrate de ocultar el dropdown
                navMenu.style.height = '550px'; // Ajusta según el contenido
            }
        });

        document.addEventListener('click', function(e) {
            if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
                dropdownMenu.classList.add('hidden');
                dropdownToggle.classList.remove('open');
                dropdownToggle.classList.add('closed');
                dropdownMenu.style.display = 'none'; // Asegúrate de ocultar el dropdown
                navMenu.style.height = '550px'; // Ajusta según el contenido
                console.log('Clicked outside, dropdown menu hidden');
            }
        });
    } else {
        console.log('Dropdown toggle not found');
    }
});














