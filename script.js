const bars = document.querySelector('.fa-bars');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.fa-times');

// Toggle Menu Section
bars.addEventListener('click', () => {
  menu.classList.toggle('active');
});

closeMenu.addEventListener('click', () => {
  menu.classList.remove('active');
});