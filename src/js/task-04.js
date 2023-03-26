const buttonDecrement = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector("#value");
const buttonIncrement = document.querySelector('[data-action="increment"]');

let counterValue = 0;

const handlBtnDecrClick = () => {
  counterValue = counterValue - 1;
  valueEl.innerHTML = counterValue;
};
const handlBtnIncrrClick = () => {
  counterValue = counterValue + 1;
  valueEl.innerHTML = counterValue;
};

buttonDecrement.addEventListener("click", handlBtnDecrClick);
buttonIncrement.addEventListener("click", handlBtnIncrrClick);
