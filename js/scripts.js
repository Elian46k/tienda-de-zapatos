$(document).ready(function () {
    // Función de búsqueda
    $('#search').on('input', function () {
        const searchText = $(this).val().toLowerCase();

        // Filtrar productos
        $('#product-list .card').each(function () {
            const productTitle = $(this).find('.card-title').text().toLowerCase();

            // Mostrar u ocultar productos según el texto
            if (productTitle.includes(searchText)) {
                $(this).parent().show(); // Muestra el contenedor del producto
            } else {
                $(this).parent().hide(); // Oculta el contenedor del producto
            }
        });
    });
});

$(document).ready(function () {
    // Mostrar/ocultar menú de categorías al hacer clic
    $('#categorias-toggle').on('click', function (e) {
        e.preventDefault(); // Evitar el comportamiento predeterminado
        $('#categorias-menu').toggleClass('d-none'); // Mostrar/ocultar el menú
    });

    // Ocultar el menú si se hace clic fuera de él
    $(document).on('click', function (e) {
        if (!$(e.target).closest('#categorias-toggle, #categorias-menu').length) {
            $('#categorias-menu').addClass('d-none'); // Ocultar menú
        }
    });
});
