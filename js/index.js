const button = document.querySelector('.btn-container');
const container = document.querySelector('.container');
const header = document.querySelector('header');

button.addEventListener('click', () => {
    button.style.display = 'none';
    container.style.filter = 'none';
    header.style.filter = 'none';
});