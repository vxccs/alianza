const btnMenu = document.querySelector("#mobil-menu");
const menu = document.querySelector(".mobile-dropdown");

btnMenu.addEventListener("click", (e) => {
  menu.classList.toggle("show-menu");
});
