const textControlEl = document.querySelector('#font-size-control');
let text = document.querySelector('#text');


textControlEl.addEventListener("input", (event) => {
    text = event.target.style.fontSize;

});