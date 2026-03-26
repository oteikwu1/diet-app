const closeIcon = document.querySelector('.close-icon');
const menuPanel = document.querySelector('.menu-panel');
const menuIcon = document.querySelector('.menu-icon');

 menuIcon.addEventListener('click', () => {
   menuPanel.classList.add('active');
 });

 closeIcon.addEventListener('click', () => {
     menuPanel.classList.remove('active')
 })
