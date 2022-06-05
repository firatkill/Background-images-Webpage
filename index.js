// https://wallpaperaccess.com/full/300180.jpg

let chosen = [1, 2, 3, 4, 5, 6, 7, 8];
let current = 1;

function bring() {
  document.querySelector(
    "body"
  ).style.backgroundImage = `url(https://wallpaperaccess.com/full/${current}.jpg)`;
}
document.querySelector("#toLeft").addEventListener("click", () => {
  if (current != 1) {
    current--;
    bring();
  }
});
document.querySelector("#toRight").addEventListener("click", () => {
  current++;
  bring();
});
document.addEventListener("DOMContentLoaded", bring);
