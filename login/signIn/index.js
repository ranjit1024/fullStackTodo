window.addEventListener("popstate", (e)=>{
    window.location.href = "./signin.html";
});

history.pushState(null, null, document.URL)