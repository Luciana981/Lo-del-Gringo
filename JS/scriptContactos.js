var enviar = document.getElementById('enviar'); //se crean la variable del boton de envio
var mail = document.getElementById('mail');//se creo la variable del campo de correo
var usuario = document.getElementById('usuario');//se creo la variable del campo de usuario
var password = document.getElementById('contra');//se creo la variable del campo de la contra
var sensorM = false;
var sensorC = false;

function mover() {//se crea la funcion para que el boton de envio no se presione hasta que los campos esten llenos

    switch(sensorM){
        case (usuario.value === null || usuario.value === ''):
            sensorM = true;
            break;
        case (mail.value === null || mail.value === ''):
            sensorM = true;
            break;
        case (sensorM >= 1):
            enviar.classList.toggle('hover');
            break;
        }
        sensorM = false;
}

function crearEnviar() { //al hacer click que se cree un h1 y que se muevva todo el registro

    if (usuario.value === null || usuario.value === '' && mail.value === null || mail.value === ''&& password.value === null || password.value === '') {}

} //al hacer click que se cree un h1 y que se muevva todo el registro
