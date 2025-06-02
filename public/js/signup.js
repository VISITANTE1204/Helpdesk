document.addEventListener('DOMContentLoaded', function () {
    const btnRegistrar = document.getElementById('btnRegistrar');
    const mensajeBot�n = document.getElementById('mensaje-bot�n');

    if (btnRegistrar) {
        btnRegistrar.addEventListener('click', (e) => {
            e.preventDefault();

            const nombre = document.getElementById('nombre').value.trim();
            const apellido = document.getElementById('apellido').value.trim();
            const dni = document.getElementById('dni').value.trim();
            const correo = document.getElementById('correo').value.trim();
            const contrase�a = document.getElementById('contrase�a').value.trim();
            const confirmarContrase�a = document.getElementById('confirmar_contrase�a').value.trim();

            const dniRegex = /^\d{8}$/;
            if (!dniRegex.test(dni)) {
                mensajeBot�n.textContent = 'El DNI debe tener 8 d�gitos';
                return;
            }

            const contrase�aRegex = new RegExp(`^${dni}p[1-9]$`);
            if (!contrase�aRegex.test(contrase�a)) {
                mensajeBot�n.textContent = 'La contrase�a debe ser el DNI seguido de la letra "p" y un d�gito del 1 al 9';
                return;
            }

            if (nombre && apellido && dni && correo && contrase�a && confirmarContrase�a) {
                if (contrase�a === confirmarContrase�a) {
                    const userData = {
                        nombre,
                        apellido,
                        dni,
                        correo,
                        contrase�a
                    };

                    fetch('/register', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(userData)
                    })
                        .then(response => response.json())
                        .then(data => {
                            console.log(data);
                            mensajeBot�n.textContent = data.mensaje;
                            if (data.mensaje === 'Cuenta creada con �xito') {
                                // window.location.href = '/login';
                            }
                        })
                        .catch(error => {
                            console.error('Error:', error);
                            mensajeBot�n.textContent = 'Ocurri� un error al intentar crear la cuenta';
                        });
                } else {
                    mensajeBot�n.textContent = 'Las contrase�as no coinciden';
                }
            } else {
                mensajeBot�n.textContent = 'Por favor, complete todos los campos.';
            }
        });
    } else {
        console.error('No se encontr� el bot�n de registrar');
    }
});