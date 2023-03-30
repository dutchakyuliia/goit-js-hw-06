const inputEl = document.querySelector("#validation-input");
const dataLength = inputEl.getAttribute("data-length");

inputEl.addEventListener("blur", (event) => {
  inputEl.classList.remove("valid", "invalid");

  +dataLength === event.target.value.length
    ? inputEl.classList.add("valid")
    : inputEl.classList.add("invalid");
});
