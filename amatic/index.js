const btnMenu = document.querySelector('#mobil-menu');
const menu = document.querySelector('.mobile-dropdown');

btnMenu.addEventListener('click', (e) => {
  menu.classList.toggle('show-menu');
  btnMenu.classList.toggle('open-icon');
});

document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !btnMenu.contains(e.target)) {
    menu.classList.remove('show-menu');
  }
});
