let color = ["Red", "Blue", "Green", "Yellow", "Pink", "Orange"];

let button = document.querySelector(".button");

let span = document.querySelector(".span");
let screen = document.querySelector(".screen");

let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function randomHex() {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += number[getranddomNumber()];
  }
  color.push(hex);
}
function getranddomNumber() {
  return Math.floor(Math.random() * number.length);
}

button.addEventListener("click", () => {
  let num = randomNumber();
  screen.style.backgroundColor = color[num];
  span.textContent = `${color[num]}`;
  randomHex();
});

function randomNumber() {
  return Math.floor(Math.random() * color.length);
}
