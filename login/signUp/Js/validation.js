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
        }, 500);
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
                document.querySelector(".showing-info-username span").style.color = "red";
                username.style.border = "1.5px solid red"
                showingUserInfo.classList.remove("hide");
            }
            else if(!finalRespose.response[3]){
                document.querySelector(".showing-info-username span").innerHTML = `<i class="bi bi-x-octagon-fill"></i>Username is already taken`
                document.querySelector(".showing-info-username").classList.remove("hide");
                showingUserInfo.classList.remove("hide");
            }
            else if(finalRespose.response[0]){
                document.querySelector(".showing-info-username span").innerHTML = `<i class="bi bi-patch-check-fill"></i>Username is Valid`
                document.querySelector(".showing-info-username span").style.color = `#228B22`
                username.style.border = "1.5px solid #228B22"
                showingUserInfo.classList.remove("hide");
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
        }, 500);
    }


    function validatingEmail(){
        if(emailValue == ""){
            document.querySelector(".showing-info-email").classList.add("hide");
            email.style.border = "1px solid #ccc";
        }
        else{
           
            if(!finalRespose.response[4]){
                document.querySelector(".showing-info-email span").style.color="red";
                email.style.border = "1.5px solid red"
                document.querySelector('.showing-info-email span').innerHTML = `<i class="bi bi-x-circle-fill"></i></i>Email is Taken`
                document.querySelector(".showing-info-email").classList.remove("hide")
                
            }
            else if(finalRespose.response[1]){
                document.querySelector('.showing-info-email span').innerHTML = `<i class="bi bi-patch-check-fill"></i>Email is Valid`
                document.querySelector('.showing-info-email span').style.color = "green";
                email.style.border = "1.4px solid #228B22";
                document.querySelector(".showing-info-email").classList.remove("hide")
            }
            
        }
   
}
    debounceUserValidation()
})
password.addEventListener("input", async (e)=>{
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
        }, 500);
    }
    if(passwordValue == ""){
        document.querySelector(".showing-password-info").classList.add("hide");
        password.style.border = "1px solid #ccc"
    }
    else {
        if(!finalRespose.response[2]){
            document.querySelector(".showing-password-info span").innerHTML = `<span ><i class="bi bi-x-octagon-fill"></i>Password Must Containe 8 letters</span>`;
            document.querySelector(".showing-password-info").style.color = "red";
            password.style.border = "1px solid red"
            document.querySelector(".showing-password-info").classList.remove('hide');
        }
        else{
            document.querySelector(".showing-password-info span").innerHTML = `<span ><i class="bi bi-patch-check-fill"></i>Password is Valid</span>`;
            document.querySelector(".showing-password-info").style.color = "green";
            password.style.border = "1px solid green"
            document.querySelector(".showing-password-info").classList.remove('hide');
        }
    }
})