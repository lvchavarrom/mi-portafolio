document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const projectCards = document.querySelectorAll('.project-card');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover clase activa de todos los botones
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Activar el botón presionado
            button.classList.add('active');

            const category = button.getAttribute('data-category');

            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (category === 'todos' || cardCategory === category) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
});