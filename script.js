// Generar el nombre de la figura al azar
var figure = document.getElementById('figureName');
var figureName = ['círculo', 'cuadrado', 'rectángulo'];
var value;

function RandArray(array){
    var rand = Math.random()*array.length | 0;
    var rValue = array[rand];
    return rValue;
}

function capcha() {
    value = RandArray(figureName);
    console.log(value);
    figure.innerHTML = value;
}

//Genera el nombre de una figura al azar al abrir la página
capcha();

//Verificación de la figura seleccionada
var Rect = document.getElementById('Rectangle');
var Squa = document.getElementById('Square');
var Circ = document.getElementById('Circle');

Rect.addEventListener('click', () => {
    let comp = 'rectángulo';
    if (comp == value) {
        Swal.fire({
            icon: 'success',
            title: '¡Muy bien!',
            text: 'Puedes enviar tus datos.'
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Te has equivocado.',
            text: '¡Vuelve a intentarlo!'
        });
        capcha();
    }
});

Squa.addEventListener('click', () => {
    let comp = 'cuadrado';
    if (comp == value) {
        Swal.fire({
            icon: 'success',
            title: '¡Muy bien!',
            text: 'Puedes enviar tus datos.'
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Te has equivocado.',
            text: '¡Vuelve a intentarlo!'
        });
        capcha();
    }
});

Circ.addEventListener('click', () => {
    let comp = 'círculo';
    if (comp == value) {
        Swal.fire({
            icon: 'success',
            title: '¡Muy bien!',
            text: 'Puedes enviar tus datos.'
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Te has equivocado.',
            text: '¡Vuelve a intentarlo!'
        });
        capcha();
    }
});



//Validación de input del formulario
function validar() {
    var nombre, correo, telefono, expresionCorreo, expresionTelefono;
    nombre = document.getElementById('name').value;
    correo = document.getElementById('mail').value;
    telefono = document.getElementById('phone').value;
    //Expresiones regulares para correo y telefono
    expresionCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    expresionTelefono = /^\d{10,10}$/;

    if (nombre === "") {
        Swal.fire({
            icon: 'error',
            title: 'El campo Nombre es obligatorio'
        });
        return false;
    } else if (correo === "") {
        Swal.fire({
            icon: 'error',
            title: 'El campo Correo es obligatorio'
        });
        return false;
    } else if (telefono === "") {
        Swal.fire({
            icon: 'error',
            title: 'El campo Teléfono es obligatorio'
        });
        return false;
    } else if (!expresionCorreo.test(correo)) {
        Swal.fire({
            icon: 'error',
            title: 'El Correo no es válido'
        });
        return false;
    } else if (!expresionTelefono.test(telefono)) {
        Swal.fire({
            icon: 'error',
            title: 'El número debe ser de 10 digitos'
        });
        return false;
    } else {
        console.log('cancela');
        confirmar();
        return false;
    }
}

// function confirmar() {
//     var nombre, correo, telefono;
//     nombre = document.getElementById('name').value;
//     correo = document.getElementById('mail').value;
//     telefono = document.getElementById('phone').value;
//     var formularioContacto = document.getElementById('contactForm');    
//     var opcion = confirm(`¿Estás seguro que los datos capturados son los correctos?\nNombre: ${nombre}, Teléfono: ${telefono} y Correo: ${correo}`);
//     if (opcion == true) {
//         formularioContacto.submit();
// 	} else {
// 	    return false;
// 	}
// }


function confirmar() {
    var nombre, correo, telefono;
    nombre = document.getElementById('name').value;
    correo = document.getElementById('mail').value;
    telefono = document.getElementById('phone').value;
    var formularioContacto = document.getElementById('contactForm');

    Swal.fire({
        title: 'Alerta',
        text: `¿Estás seguro que los datos capturados son los correctos?\nNombre: ${nombre}, Teléfono: ${telefono} y Correo: ${correo}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar'
      }).then((result) => {
        if (result.isConfirmed) {
            formularioContacto.submit();
        } else {
            return false;
        }
      })
}
