let preveiwContainer = document.querySelector('.products-preview'); /*querySelector() Devuelve el primer elemento del documento*/
let previewBox = preveiwContainer.querySelectorAll('.preview'); /* querySelectorAll() de un Element devuelve una NodeList estática, que representa una lista de elementos del documento que coinciden con el grupo de selectores indicados. */
document.querySelectorAll('.products-container .product').forEach(product =>{ /*forEach() ejecuta la función callback una vez por cada elemento del array*/
    product.onclick = () =>{ /*onclick ejecuta una cierta funcionalidad cuando se hace clic en un botón.*/
      preveiwContainer.style.display = 'flex';
      let name = product.getAttribute('data-name'); /*getAttribute() devuelve el valor del atributo especificado en el elemento.*/
      previewBox.forEach(preview =>{
        let target = preview.getAttribute('data-target');
        if(name == target){
          preview.classList.add('active');
        }
      });
    };
});

previewBox.forEach(close =>{
    close.querySelector('.fa-times').onclick = () =>{
      close.classList.remove('active');
      preveiwContainer.style.display = 'none';
    };
});