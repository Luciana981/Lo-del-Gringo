/*
//#region 
const typedTextSpan = document.querySelector(".texto-tipeado");
const cursorSpan = document.querySelector (".cursor");

const textArray = ["Familiar", "Rico", "Amabilidad", "Pet Friendly"];//definiendo los textos de texto-tipeado
const typingDelay = 200; //se definen los retrasos en milisegundos
const erasingDelay = 100;
const newTextDelay = 2000;//retraso entre el texto actual y el siguiente
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
//#endregion

//#region 
function erase() {
    if(charIndex > 0){
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].charAt(charIndex).substring(0, charIndex - 1);
        charIndex--;//se resta por uno
        setTimeout(erase, erasingDelay);
    }else{
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex>=textArray.length) textArrayIndex=0;
        setTimeout(type, typingDelay + 1100);
     }
}
//#endregion

//#region 
//agregado para tener control del llamado de la funcion
document.addEventListener("DOMContentLoaded", function() {//cuando todos los elementos DOM carguen, se va a ejecutar la funcion
    if (textArray.length) setTimeout(type, newTextDelay + 250);//se le agrega un retraso de 250 milisegundos antes de ejecutar la funcion 
});

//#endregion
*/

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