const container = document.getElementsByClassName('js-container')[0];

if (container) {
    container.addEventListener('click', function (event) {
        const card = event.target.closest('.card');

        if (card !== null) {
            card.classList.toggle('card_active');
        }
    });
}
