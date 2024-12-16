// Seleccionamos los elementos del formulario
const formContacto = document.getElementById("form-contacto");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");

// Manejador del evento submit
formContacto.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita la recarga de la página

    // Validación
    if (!nombre.value.trim()) {
        alert("Por favor, ingresa tu nombre.");
        nombre.focus();
        return;
    }

    if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        alert("Por favor, ingresa un correo válido.");
        email.focus();
        return;
    }

    if (!mensaje.value.trim()) {
        alert("Por favor, escribe un mensaje.");
        mensaje.focus();
        return;
    }

    // Crear el mensaje de éxito
    const mensajeExito = document.createElement("div");
    mensajeExito.className = "alert alert-success mt-3";
    mensajeExito.textContent = `Estimado/a ${nombre.value.trim()}, el correo ${email.value.trim()} fue registrado exitosamente.`;
    formContacto.appendChild(mensajeExito);

    // Limpiar el formulario
    formContacto.reset();

    // Ocultar el mensaje después de 5 segundos
    setTimeout(() => {
        mensajeExito.remove();
    }, 5000);
});
