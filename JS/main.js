const boton = document.querySelector ('.compra');
const modal = document.querySelector ('.modal')

boton.addEventListener('click', (i) =>{
    i.preventDefault ();
    modal.classList.add('modal-show')
});