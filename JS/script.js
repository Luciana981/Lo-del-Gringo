const text = document.querySelector(".segundo-texto");
function textLoad() { 
    setTimeout(() => {
        text.textContent = "Familiar";
    }, 0);
    setTimeout(() => {
        text.textContent = "Amabilidad";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Pet Friendly";
    }, 8000);
}

textLoad();
setInterval(textLoad, 12000);