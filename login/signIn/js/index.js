window.addEventListener("popstate", (e) => {
  window.location.href = "./signin.html";
});

history.pushState(null, null, document.URL);

const password = document.getElementById("password");
const passwordField = document.getElementById("password-field");
const form = document.querySelector("form");
const toastBox = document.querySelector("#toastBox");

//!adding the show and hide password functinon
const eyeShowButton = document.querySelector(".password-show");
const eyeHideButton = document.querySelector(".password-hide");
passwordField.addEventListener("click", (e) => {
  if (e.target.classList.contains("password-hide")) {
    document.querySelector(".password-hide").classList.add("anotherHide");
    document.querySelector(".password-show").classList.remove("anotherHide");
  }

  if (e.target.classList.contains("password-show")) {
    document.querySelector(".password-show").classList.add("anotherHide");
    document.querySelector(".password-hide").classList.remove("anotherHide");
  }
});
eyeHideButton.addEventListener("click", (e) => {
  password.type = "text";
});

eyeShowButton.addEventListener("click", (e) => {
  password.type = "password";
});
//?basic funcitonnality of js

//!implementing the sign in functionnality
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");

  
  const response = await fetch(
    `http://192.168.2.6:3000/signin/?email=${email.value}&&password=${password.value}`
  );
  const finalRespose = await response.json();

  
  if (!finalRespose.response[0] || !finalRespose.response[1]) {
    const htmlToSend = `<i class="bi bi-x-circle-fill"></i></i><span>Username or Password is not Valid<span>`;
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = htmlToSend;
    toastBox.append(toast);
    setTimeout(() => {
      toast.remove();
    }, 2000);
    console.log("jk")
    
  }


});
