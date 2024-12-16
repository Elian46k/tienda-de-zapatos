document.addEventListener("DOMContentLoaded", () => {
    const categoriaLink = document.querySelector(".categoria");
    const submenu = document.querySelector(".submenu");

    categoriaLink.addEventListener("click", (event) => {
        event.preventDefault();
        submenu.classList.toggle("visible");
    });

    document.addEventListener("click", (event) => {
        if (!submenu.contains(event.target) && !categoriaLink.contains(event.target)) {
            submenu.classList.remove("visible");
        }
    });
});
