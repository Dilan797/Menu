document.addEventListener('DOMContentLoaded', function() {
    const entradasContainer = document.getElementById('menuEntradas');
    const favoritesContainer = document.getElementById('favorites-container');

    // Cargar los "me gusta" desde localStorage
    function loadLikes() {
        const likes = JSON.parse(localStorage.getItem('likes')) || {};
        const cards = Array.from(entradasContainer.querySelectorAll('.menu-item'));
        cards.forEach(card => {
            const id = card.getAttribute('data-id');
            const likeCountElement = card.querySelector('.like-count span');
            if (likes[id]) {
                likeCountElement.textContent = likes[id].count;
            } else {
                likeCountElement.textContent = '0';
            }
        });
    }

    // Guardar los "me gusta" en localStorage
    function saveLikes(id, count) {
        const likes = JSON.parse(localStorage.getItem('likes')) || {};
        likes[id] = { count: count };
        localStorage.setItem('likes', JSON.stringify(likes));
    }

    // Función para manejar el clic en el botón de "me gusta"
    function handleLikeButtonClick(event) {
        const likeBtn = event.target;
        const card = likeBtn.closest('.menu-item');
        const likeCountElement = card.querySelector('.like-count span');
        const id = card.getAttribute('data-id');
        let likeCount = parseInt(likeCountElement.textContent, 10);

        likeCount++;
        likeCountElement.textContent = likeCount;
        saveLikes(id, likeCount);
        updateFavorites();
    }

    // Función para actualizar la sección de favoritos
    function updateFavorites() {
        const cards = Array.from(entradasContainer.querySelectorAll('.menu-item'));
        cards.sort((a, b) => {
            const aLikes = parseInt(a.querySelector('.like-count span').textContent, 10);
            const bLikes = parseInt(b.querySelector('.like-count span').textContent, 10);
            return bLikes - aLikes;
        });

        favoritesContainer.innerHTML = '';
        cards.slice(0, 6).forEach(card => {
            favoritesContainer.appendChild(card.cloneNode(true));
        });
    }

    // Añadir listeners a los botones de "me gusta"
    const likeButtons = entradasContainer.querySelectorAll('.like-btn');
    likeButtons.forEach(button => {
        button.addEventListener('click', handleLikeButtonClick);
    });

    loadLikes();
    updateFavorites();
});
