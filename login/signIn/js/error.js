const toastButton = document.querySelector("#showToast");

const toastBox = document.querySelector("#toastBox");

const htmlToSend = `<i class="bi bi-x-circle-fill"></i><span>Username or Password is not Valid<span>`
toastButton.addEventListener("click", (e)=>{
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = htmlToSend;
    toastBox.append(toast)
    setTimeout(()=>{
        toast.remove()
    },2000)
});
const toast = document.querySelector(".toast")
console.log(toast)

