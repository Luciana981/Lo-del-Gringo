//#region 
const typedTextSpan = document.querySelector(".texto-tipeado");
const cursorSpan = document.querySelector (".cursor");

const textArray = ["Familiar", "Rico", "Amabilidad", "Pet Friendly"];//definiendo los textos de texto-tipeado
//se definen los retrasos en milisegundos
const typingDelay = 200; 
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;
//#endregion

//#region 
function type() {
    if(charIndex < textArray[textArrayIndex].length){//aqui se inserta el array de los textos
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;//se agrega uno para proceder al caracter siguiente
        setTimeout(type, typingDelay);
    }else{
     cursorSpan.classList.remove("typing");
     setTimeout(erase, newTextDelay); //se agrega un retraso de 2000 milisegundos antes de pasar a la funcion de erase
    }
}

//agregado para tener control del llamado de la funcion
document.addEventListener("DOMContentLoaded", function() {//cuando todos los elementos DOM carguen, se va a ejecutar la funcion
    if (textArray.length) setTimeout(type, newTextDelay + 250);//se le agrega un retraso de 250 milisegundos antes de ejecutar la funcion 
});

//#endregion