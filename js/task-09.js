function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorSpanEl = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");
const body = document.querySelector("body");

changeColorBtn.addEventListener("click", () => {
  let newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  colorSpanEl.textContent = newColor;
});
