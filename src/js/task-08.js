const form = document.querySelector('.login-form');


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;
       if (email.value = "" || password.value = "" ) { alert("You must type all inputs")
    
}
});