const openModal = document.querySelector('.compra');
const modal = document.querySelector('.modal');
const cerrarModal = document.querySelector('.modal-cerrar');

openModal.addEventListener('click', (e)=>{
    e.preventDefault ();
    modal.classList.add('modal-show');
});

cerrarModal.addEventListener('click', (e)=>{
    e.preventDefault ();
    modal.classList.remove('modal-show');
});