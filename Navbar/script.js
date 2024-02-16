const button = document.querySelector(".ham-button");

const menu = document.querySelector(".menu");

button.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
});
