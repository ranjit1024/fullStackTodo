const signUp = document.querySelector("#signUpForm");

const signupUsername = document.querySelector("#username")
const signupPassword = document.querySelector("#password");
const signupEmail = document.querySelector("#email");

const wrong = document.querySelector(".wrong")


signupUsername.addEventListener("input", async (e)=>{

    let timeout;
    function debouncedRequest(){
        clearTimeout(timeout);
        timeout = setInterval(function() {
            validate()
        },300)
    }

    async function validate(){
    const response = await fetch(`http://192.168.2.6:3001/signup/?username=${signupUsername.value}&&password=${signupPassword.value}&&email=${signupEmail.value}`);
    const finalResponse = await response.json();

    let  successData = [];

    finalResponse.validation.forEach(element =>{
        successData.push(element.success);
    })
    // console.log(successData);

    if(!successData[0]){
        document.getElementById("username").style.border ="1.5px solid red";
        document.querySelector(".wrongUsername").classList.remove("hide")
    }
    else{
        document.getElementById("username").style.border ="1px solid #ccc";
        document.querySelector(".wrongUsername").classList.add("hide");
    }
}
    
    
debouncedRequest()
})

