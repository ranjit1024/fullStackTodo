const signInForm = document.getElementById("signInForm");
const signUpForm = document.getElementById("signUpForm");
const toggleSignUp = document.getElementById("toggleSignUp");
const toggleSignIn = document.getElementById("toggleSignIn");

const signUp = document.querySelector("#signUpForm");

const signupUsername = document.querySelector("#username")
const signupPassword = document.querySelector("#password");
const signupEmail = document.querySelector("#email");


// Switch to Sign Up Form


signUp.addEventListener("submit", async (e)=>{
    e.preventDefault();
    const response = await fetch(`http://192.168.2.6:3000/signup/?username=${signupUsername.value}&&password=${signupPassword.value}&&email=${signupEmail.value}`);
    const finalResponse = await response.text();
    console.log(signupUsername.value)
   
})