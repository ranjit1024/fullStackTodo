const signUp = document.querySelector("#signUpForm");

const signupUsername = document.querySelector("#username");
const signupPassword = document.querySelector("#password");
const signupEmail = document.querySelector("#email");

const model = document.querySelector(".model-container");
const close = document.querySelector(".close");

signupUsername.addEventListener("keydown", async (e) => {
  let timeout;
  function debouncedRequest() {
    clearTimeout(timeout);
    timeout = setInterval(function () {
      validate();
    }, 500);
  }

  async function validate() {
    const response = await fetch(
      `http://192.168.2.6:3001/validation/?username=${signupUsername.value}&&password=${signupPassword.value}&&email=${signupEmail.value}`
    );
    const finalResponse = await response.json();

    let successData = [];

    finalResponse.validation.forEach((element) => {
      successData.push(element.success);
    });
    // console.log(successData);

    if (!successData[0]) {
      document.getElementById("username").style.border = "1.5px solid red";
      document.querySelector(".wrongUsername").classList.remove("hide");
    } else {
      document.getElementById("username").style.border = "1px solid #ccc";
      document.querySelector(".wrongUsername").classList.add("hide");
    }
  }

  debouncedRequest();
});

signupPassword.addEventListener("input", async (e) => {
  let timeout;
  function debouncedRequest() {
    clearTimeout(timeout);
    timeout = setInterval(function () {
      validate();
    }, 500);
  }

  async function validate() {
    const response = await fetch(
      `http://192.168.2.6:3001/validation/?username=${signupUsername.value}&&password=${signupPassword.value}&&email=${signupEmail.value}`
    );
    const finalResponse = await response.json();

    let successData = [];

    finalResponse.validation.forEach((element) => {
      successData.push(element.success);
    });
    // console.log(successData);

    if (!successData[2]) {
      document.getElementById("password").style.border = "1.5px solid red";
      document.querySelector(".wrongPassword").classList.remove("hide");
    } else {
      document.getElementById("password").style.border = "1px solid #ccc";
      document.querySelector(".wrongPassword").classList.add("hide");
    }
  }

  debouncedRequest();
});


signUp.addEventListener("submit", async (e) => {
  e.preventDefault();

  const response = await fetch(
    `http://192.168.2.6:3001/validation/?username=${signupUsername.value}&&password=${signupPassword.value}&&email=${signupEmail.value}`
  );
  const finalResponse = await response.json();

  let successData = [];

  finalResponse.validation.forEach((element) => {
    successData.push(element.success);
  });

  if(successData[0] && successData[1] && successData[2]){
    const response = fetch(
        `http://192.168.2.6:3001/signup/?username=${signupUsername.value}&&password=${signupPassword.value}&&email=${signupEmail.value}`
      ).then(model.classList.add("show"));
      
    signUp.reset();
  }
  else{
    console.log("this is good ti deal with")
  }
  
});

function disableBackButton() {
  window.addEventListener('popstate', function (event) {
      history.pushState(null, null, location.href);
  });
}

close.addEventListener("click",
    e=>{
      model.classList.remove("show");
      disableBackButton()
      window.location = "http://127.0.0.1:5500/login/signIn/signin.html";
    
})