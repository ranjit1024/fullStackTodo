window.addEventListener("popstate", (e)=>{
    window.location.href = "./signin.html";
});

history.pushState(null, null, document.URL);


const password = document.getElementById("password");
const passwordField = document.getElementById("password-field");

//!adding the show and hide password functinon
const eyeShowButton =  document.querySelector('.password-show');
const eyeHideButton = document.querySelector(".password-hide");
passwordField.addEventListener("click", (e)=>{
    if(e.target.classList.contains("password-hide")){
        document.querySelector(".password-hide").classList.add("anotherHide")
        document.querySelector(".password-show").classList.remove("anotherHide")
    }

    if(e.target.classList.contains("password-show")){
        document.querySelector(".password-show").classList.add("anotherHide")
        document.querySelector(".password-hide").classList.remove("anotherHide")
    }
})
eyeHideButton.addEventListener("click", (e)=>{
    password.type = "text"
})

eyeShowButton.addEventListener("click", (e)=>{
    password.type = "password"
})