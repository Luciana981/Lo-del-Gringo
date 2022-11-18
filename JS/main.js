const openModal = document.querySelector('.compra');
const modal = document.querySelector('.modal');

openModal.addEventListener('click', (e)=>{
    e.preventDefault ();
    modal.classList.add('modal-show');
});