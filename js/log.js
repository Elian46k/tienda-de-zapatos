// Asegúrate de que el script se ejecute después de que el DOM esté completamente cargado
  // Redirigir al hacer clic en "Iniciar Sesión"
  document.getElementById("login").addEventListener("click", function () {
    window.location.href = "index.html";
});


document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');

    // Verifica que los elementos existan antes de agregar los eventos
    if (container && registerBtn && loginBtn) {
        registerBtn.addEventListener('click', () => {
            container.classList.add("active");
        });

        loginBtn.addEventListener('click', () => {
            container.classList.remove("active");
        });
    } else {
        console.error("Algunos elementos no se encontraron en el DOM. Verifica los IDs.");
    }
});
