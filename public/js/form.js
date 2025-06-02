const formulario = document.querySelector('form');
formulario.addEventListener('submit', (e) => {
    const comentarios = document.getElementById('comentarios');
    if (comentarios.value.includes('\n')) {
        e.preventDefault();
        alert('La descripci�n corta del problema solo debe tener una l�nea.');
    } else if (!formulario.checkValidity()) {
        e.preventDefault();
        alert('Por favor, complete todos los campos requeridos correctamente.');
    } else {
        e.preventDefault();
        // formulario.reset(); // Descomentar l�nea para limpiar el formulario despu�s de enviar
    }
});
