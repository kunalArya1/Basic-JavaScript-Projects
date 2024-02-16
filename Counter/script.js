let heading = document.getElementById("heading");

const button = document.querySelectorAll("button");
let i = 0;

button.forEach(function (btn) {
  btn.addEventListener("click", (event) => {
    if (event.target.id === "Inc") {
      i++;
    } else if (event.target.id === "dce") {
      i--;
    } else {
      i = 0;
    }
    if (i === 0) {
      heading.style.color = "black";
    } else if (i > 0) {
      heading.style.color = "green";
    } else {
      heading.style.color = "red";
    }

    heading.textContent = i;
  });
});

// inc.addEventListener("click", () => {
//   i++;
//   ui();
// });

// dec.addEventListener("click", () => {
//   i--;
//   ui();
// });

// rec.addEventListener("click", () => {
//   i = 0;
//   ui();
// });

// function ui() {
//   if (i === 0) {
//     heading.style.color = "black";
//   } else if (i > 0) {
//     heading.style.color = "green";
//   } else {
//     heading.style.color = "red";
//   }

//   heading.textContent = i;
//   console.log(i);
// }
