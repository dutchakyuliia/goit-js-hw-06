const inputEl = document.querySelector('#validation-input');
const dataLength = inputEl.getAttribute('data-length');

inputEl.addEventListener('blur', (event) => {
    if (dataLength === event.target.value) {
        inputEl.classList.add("valid");
    }
    else { inputEl.classList.add("invalid") }
}      
);


