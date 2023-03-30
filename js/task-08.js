const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("You must type all inputs");
  }

  console.log({email: email.value, password: password.value})
  event.target.reset();
});
