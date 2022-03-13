const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greetingElem = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    
    const typedsername = loginInput.value;
    localStorage.setItem(USERNAME_KEY, typedsername);
    
    paintGreetings(typedsername);
}

function paintGreetings(name){
    greetingElem.innerText = `Hello ${name}`;
    greetingElem.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    // show the greeting
    paintGreetings(savedUsername);
}