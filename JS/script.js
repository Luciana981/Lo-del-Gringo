const text = document.querySelector(".segundo-texto");
function textLoad() { 
    setTimeout(() => {
        text.textContent = "Familia";
    }, 0);
    setTimeout(() => {
        text.textContent = "Generosidad";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Compañerismo";
    }, 8000);
}

textLoad();
setInterval(textLoad, 12000);