const textControlEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

textControlEl.addEventListener("input", (event) => {
  textEl.style.fontSize = event.target.value + "px";
});
