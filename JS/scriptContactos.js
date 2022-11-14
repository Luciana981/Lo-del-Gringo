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
    }


    /*if (usuario.value === null || usuario.value === ''){//verifica que el campo del usuario este lleno
        sensorM = sensorM + 1;
    }

    if(mail.value === null || mail.value === ''){
        sensorM = sensorM + 1;
    }

    if(contra.value === null || contra.value === ''){
        sensorM = sensorM + 1;
    }

    if(sensorM >= 1){
        enviar.classList.toggle('hover');
    }
    sensorM = 0;*/
}
