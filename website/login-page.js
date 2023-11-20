const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const img = document.querySelector("#login-form img")
const h2 = document.querySelector("#login-form h2")
const hello = document.querySelector("#login-form h1")

img.style.display="none";
h2.style.display="none";


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "flralc" && password === "1601") {
        img.style.display="initial";
        h2.style.display="initial";
        hello.innerHTML="Hello!";
        loginForm.elements["username"].style.display="none"
        loginForm.elements["password"].style.display="none"
        loginButton.style.display="none"
        
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
