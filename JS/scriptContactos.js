let enviar = document.getElementById('enviar'); //se crean la variable del boton de envio
let mail = document.getElementById('mail');//se creo la variable del campo de correo
let usuario = document.getElementById('usuario');//se creo la variable del campo de usuario
let password = document.getElementById('password');//se creo la variable del campo de la contra
var sensor1 = 0;

function mover() {//se crea la funcion para que el boton de envio no se presione hasta que los campos esten llenos
        if (usuario.value = null || usuario.value == ''){//verifica que el campo del usuario este lleno
        sensor1 = sensor1 + 1;
    }

    if(mail.value = null || mail.value == ''){
        sensor1 = sensor1 + 1;
    }

    if(password.value = null || password.value == ''){
        sensor1 = sensor1 + 1;
    }

    if(senson1 >= 1){
        enviar.classList.toggle('hover');
    }
    sensor1 = 0;
}