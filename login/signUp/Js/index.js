//!adding back function
window.addEventListener("popstate", (e)=>{
    window.location.href = "signup.html"
})
history.pushState(null, null, document.URL)
//?done

//!adding on correct model
const modelContainer = document.querySelector(".model-container");
const form = document.querySelector("form");
const closeModel = document.querySelector(".close");
form.addEventListener("submit", async (e)=>{
    e.preventDefault();
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;

    const response = await fetch(`http://192.168.2.6:3000/validation/?username=${usernameValue}&&email=${emailValue}&&password=${passwordValue}`)
    const finalRespose = await response.json();
    console.log(finalRespose.response);
    
    
    
 

    if(finalRespose.response){
        modelContainer.classList.remove('anotherHide2');
        modelContainer.classList.add("open");
        const signUp = await fetch(`http://192.168.2.6:3000/signup/?username=${usernameValue}&&email=${emailValue}&&password=${passwordValue}`)
        
    }
})

closeModel.addEventListener("click", (e)=>{
    window.location.href = "http://127.0.0.1:5500/login/signIn/signin.html"
})

