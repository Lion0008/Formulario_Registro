// script.js

// Función para validar la fortaleza de la contraseña
function validarFortalezaContrasena(contrasena) {
    // Agrega tu lógica de validación aquí
    // Por ejemplo, verifica la longitud, caracteres especiales, etc.
    return contrasena.length >= 8;
}

// Función para mostrar mensajes de error
function mostrarError(campo, mensaje) {
    var errorElement = document.getElementById(campo + 'Error');
    if (errorElement) {
        errorElement.textContent = mensaje;
    }
}

// Función para limpiar mensajes de error
function limpiarErrores() {
    var errores = document.querySelectorAll('.error');
    errores.forEach(function (error) {
        error.textContent = '';
    });
}

// Función para mostrar un mensaje de éxito
function mostrarMensajeExito() {
    // Puedes personalizar el mensaje de éxito aquí
    alert('¡Registro exitoso! Gracias por registrarte.');
}

// Validación de contraseña
function validarContrasena() {
    var contrasena = document.getElementById('password').value;
    var confirmarContrasena = document.getElementById('confirmPassword').value;

    if (contrasena.length < 8) {
        mostrarError('password', 'La contraseña debe tener al menos 8 caracteres');
        return false;
    }

    if (contrasena !== confirmarContrasena) {
        mostrarError('confirmPassword', 'Las contraseñas no coinciden');
        return false;
    }

    return true;
}

// Función principal de validación del formulario
function validarFormulario(event) {
    limpiarErrores();

    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;
    var ciudad = document.getElementById('ciudad').value;
    var pais = document.getElementById('pais').value;
    var terminos = document.getElementById('terminos').checked;

    // Validación de nombre
    if (nombre.trim() === '') {
        mostrarError('nombre', 'El nombre es requerido');
        event.preventDefault();
    }

    // Validación de email
    if (email.trim() === '' || !email.includes('@')) {
        mostrarError('email', 'Ingresa un correo electrónico válido');
        event.preventDefault();
    }

    // Validación de contraseña
    if (!validarFortalezaContrasena(document.getElementById('password').value) || !validarContrasena()) {
        event.preventDefault();
    }

    // Validación de teléfono (opcional)
    if (telefono.trim() !== '' && !(/^\d+$/.test(telefono))) {
        mostrarError('telefono', 'Ingresa un número de teléfono válido');
        event.preventDefault();
    }

    // Validación de país
    if (pais === '' || pais === '1') {
        mostrarError('pais', 'Selecciona tu país');
        event.preventDefault();
    }

    // Aceptación de términos y condiciones
    if (!terminos) {
        mostrarError('terminos', 'Debes aceptar los términos y condiciones');
        event.preventDefault();
    }

    // Mostrar mensaje de éxito si no hay errores
    if (document.querySelectorAll('.error').length === 0) {
        mostrarMensajeExito();
    }
}

// Asignar la función de validación al evento submit del formulario
document.getElementById('registrationForm').addEventListener('submit', validarFormulario);
