const loginForm = document.querySelector(".login_form");
const login = loginForm.querySelectorAll(".social_login a");
const close = loginForm.querySelector(".close");

function openForm(){
    loginForm.classList.remove("is_closed");
}

function closeForm(){
    loginForm.classList.add("is_closed");
}

login.forEach(loginItem => loginItem.addEventListener("click", openForm));

close.addEventListener("click", closeForm);