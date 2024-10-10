const modelButton = document.querySelector(".model-button");
const model = document.querySelector("#modal");

const closeButton = document.querySelector(".close-button");

modelButton.addEventListener("click", (e)=>{
    model.showModal()
})

closeButton.addEventListener("click", (e)=>{
    model.setAttribute("closing", "")
    model.addEventListener("animationend", ()=>{
        model.removeAttribute("closing");
        model.close()
    },{once:true})
})