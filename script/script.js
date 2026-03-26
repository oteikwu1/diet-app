const closeIcon = document.querySelector('.close-icon');
const menuContainer = document.querySelector('.menu-container');
const menuIcon = document.querySelector('.menu-icon');

closeIcon.addEventListener('click', () => {
    menuContainer.classList.add('active')
});
menuIcon.addEventListener('click', () => {
    menuContainer.classList.remove('active')
});
