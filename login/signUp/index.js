const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordField = document.getElementById("password-field");

//!adding the show and hide password functinon
const eyeShowButton =  document.querySelector('.password-show');
const eyeHideButton = document.querySelector(".password-hide");


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
// done with password hide and show function

//!adding enent listenre on username
username.addEventListener("input", async (e)=>{
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;

    const response = await fetch(`http://192.168.2.6:3000/validation/?username=${usernameValue}&&email=${emailValue}&&password=${passwordValue}`)
    const finalRespose = await response.json();
    
    // *implemetaion of debouncing
    let timeOut;
    function debounceUserValidation(){
        clearTimeout(timeOut);
        timeOut = setTimeout(() => {
           validatingUser()
        }, 300);
    }

    //!starating with validation function
    const showingUserInfo = document.querySelector(".showing-info-username");
    function validatingUser(){
        if(usernameValue == ""){
            showingUserInfo.classList.add("hide")
            username.style.border = "1px solid #ccc"
        }
        else{
            if(!finalRespose.response[0]){
                showingUserInfo.classList.remove("hide");
                document.querySelector(".showing-info-username span").style.color = "red";
                username.style.border = "1.5px solid red"
            }
            else if(!finalRespose.response[3]){
                document.querySelector(".showing-info-username span").innerHTML = `<i class="bi bi-x-octagon-fill"></i>Username is already taken`
                document.querySelector(".showing-info-username").classList.remove("hide");
                
            }
            else if(finalRespose.response[0]){
                document.querySelector(".showing-info-username span").innerHTML = `<i class="bi bi-patch-check-fill"></i>Username is Valid`
                document.querySelector(".showing-info-username span").style.color = `#228B22`
                username.style.border = "1.5px solid #228B22"
            }
             
        }  
    }
    // ?done wirh main uservalidation function
    debounceUserValidation()

})
// ?done with username validation

email.addEventListener("input", async (e)=>{
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;

    const response = await fetch(`http://192.168.2.6:3000/validation/?username=${usernameValue}&&email=${emailValue}&&password=${passwordValue}`)
    const finalRespose = await response.json();
    

    let timeOut;
    function debounceUserValidation(){
        clearTimeout(timeOut);
        timeOut = setTimeout(() => {
           validatingEmail()
        }, 100);
    }


    function validatingEmail(){
        if(emailValue !== ""){

        if(!finalRespose.response[4]){
            document.querySelector(".notValidEmail").classList.remove("hide")
            document.querySelector(".validEmail").classList.add("hide");
            email.style.border = "1.4px solid red"
        }
        else if(finalRespose.response[1]){
            document.querySelector(".notValidEmail").classList.add("hide");
            document.querySelector(".validEmail").classList.remove("hide");
            email.style.border = "1.4px solid #228B22"
        }
        else if(!finalRespose.response[1]){
            document.querySelector(".validEmail").classList.add("hide");
            email.style.border = "1.4px solid #ccc";
        }
    }
    console.log(finalRespose.response[1])
}
    debounceUserValidation()
})