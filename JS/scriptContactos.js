let enviar = document.getElementById('enviar'); //se crean la variable del boton de envio
let mail = document.getElementById('mail');//se creo la variable del campo de correo
let usuario = document.getElementById('usuario');//se creo la variable del campo de usuario
let password = document.getElementById('password');//se creo la variable del campo de la contra
var sensorM = 0;
var sensorC = 0;

function mover() {//se crea la funcion para que el boton de envio no se presione hasta que los campos esten llenos

    if (usuario.value === null || usuario.value === ''){//verifica que el campo del usuario este lleno
        sensorM = sensorM + 1;
    }

    if(mail.value === null || mail.value === ''){
        sensorM = sensorM + 1;
    }

    if(password.value === null || password.value === ''){
        sensorM = sensorM + 1;
    }

    if(sensorM >= 1){
        enviar.classList.toggle('hover');
    }
    sensorM = 0;
}