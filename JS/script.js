//#region 
const typedTextSpan = document.querySelector(".texto-tipeado");
const cursorSpan = document.querySelector (".cursor");

const textArray = ["Familiar", "Rico", "Amabilidad", "Pet Friendly"];//definiendo los textos de texto-tipeado
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;
//#endregion

//#region 
function type() {
    if(charIndex < textArray[textArrayIndex].length){//aqui se inserta el array de los textos
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }else{
        //aqui se borra el texto para proceder a otro
    }
}

type();

//#endregion