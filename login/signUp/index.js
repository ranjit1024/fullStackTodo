const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordField = document.getElementById("password-field");

//!adding the show and hide password functinon
const eyeShowButton =  document.querySelector('.password-show');
const eyeHideButton = document.querySelector(".password-hide");
// const eyeShowButton = documen.querySelector

//!making password view and hide funciton
passwordField.addEventListener("click", (e)=>{
    
    if(e.target.classList.contains("password-hide")){
        eyeHideButton.classList.add("hide");
        eyeShowButton.classList.remove("hide");
    }
    if(e.target.classList.contains("password-show")){
        eyeShowButton.classList.add("hide");
        eyeHideButton.classList.remove("hide")
    }
})
eyeHideButton.addEventListener("click", (e)=>{
    console.log("this is working");
    password.type = "text"
});
eyeShowButton.addEventListener("click", (e)=>{
    password.type = "password"
})
//?done with password hide and show function

//!adding enent listenre on username
username.addEventListener("input", (e)=>{
    const usernameValue = username.value;
    const emailValue = username.value;
    const passwordValue = username.value;

    console.log(usernameValue, passwordValue, emailValue)
})