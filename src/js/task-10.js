function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");
const inputEl = document.querySelector("#controls > input");

function createBoxes(amount) {
  console.log(amount);
  for (let i = 0; i < amount; i++) {
    const divCreate = document.createElement("div");

    const firstDiv = 3;
    divCreate.style.width = (3 + i) * 10 + "px";
    divCreate.style.height = (3 + i) * 10 + "px";
    divCreate.style.backgroundColor = getRandomHexColor();

    boxes.append(divCreate);
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

btnCreate.addEventListener("click", () => {
  createBoxes(inputEl.value);
});

btnDestroy.addEventListener("click", () => {
  destroyBoxes();
});
