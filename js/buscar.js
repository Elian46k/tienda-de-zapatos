
const products = [
    { id: 1, name: "Zapato Elegante Negro", price: "S/ 250", image: "../img/imge.webp" },
    { id: 2, name: "Zapato de Cuero Negro", price: "S/ 180", image: "../img/zapato2.jpg" },
    { id: 4, name: "Zapato Deportivo Casua Azul", price: "S/ 190", image: "../img/zapato3.jpg" },
    { id: 5, name: "Zapatilla Casual Elegante Azul", price: "S/ 300", image: "../img/zapato4.jpg" },
    { id: 6, name: "Zapatilla Elegante Blanco y Azul", price: "S/ 220", image: "../img/zapato5.webp" },
    { id: 7, name: "Zapatilla Comoda Casual", price: "S/ 170", image: "../img/zapato6.webp" },
    { id: 8, name: "Zapatilla de Cuero Marron", price: "S/ 230", image: "../img/zapato7.jpg" },
    { id: 9, name: "Zapato Tipo Botin para el Frio", price: "S/ 260", image: "../img/zapato8.webp" },
    { id: 10, name: "Zapato de Cuero Negro", price: "S/ 350", image: "../img/zapato9.webp" },
    { id: 11, name: "Zapatilla de Cuero Negro", price: "S/ 1010", image: "../img/zapato10.jpg" },
    { id: 12, name: "Zapatilla de Cuero Negro Casual", price: "S/ 580", image: "../img/zapato11.webp" },
    { id: 13, name: "Zapatilla Negro Casual", price: "S/ 610", image: "../img/zapato12.jpg" },
    { id: 14, name: "Zapatilla Cuero Negro y Dorado", price: "S/ 280", image: "../img/zapato13.webp" },
    { id: 15, name: "Zapato Elegante Marron", price: "S/ 870", image: "../img/zapato14.webp" },
    { id: 16, name: "Zapato Negro Charol", price: "S/ 200", image: "../img/zapato15.avif" },
    { id: 17, name: "Zapato Zapato Blanco Elegante", price: "S/ 1120", image: "../img/zapato16.avif" },
    { id: 18, name: "Zapato Zapato Charol Blanco", price: "S/ 588", image: "../img/zapato17.webp" },
    { id: 19, name: "Zapato Deportivo Casual Blanco", price: "S/ 298", image: "../img/zapato18.jpg" },
    { id: 20, name: "Zapatilla Azul", price: "S/ 210", image: "../img/zapato19.jpg" },
    { id: 21, name: "Zapatilla Deportivo Rojo", price: "S/ 488", image: "../img/zapato20.webp" },
    { id: 22, name: "Zapatilla Casual Gris", price: "S/ 800", image: "../img/zapato21.jpg" },
    { id: 23, name: "Zapatilla Deportivo Blanco", price: "S/ 1000", image: "../img/zapato22.jpg" },
    { id: 24, name: "Zapato Deportivo Negro", price: "S/ 700", image: "../img/zapato23.webp" },
    { id: 25, name: "Zapato Deportivo Rojo", price: "S/ 2333", image: "../img/zapato24.webp" },
    { id: 26, name: "Zapato para Frio", price: "S/ 469", image: "../img/zapato25.jpg" },
    { id: 27, name: "Sandalia Verde", price: "S/ 900", image: "../img/zapato26.jpg" },
    { id: 28, name: "Crods Rojo", price: "S/ 500", image: "../img/zapato27.avif" },
    { id: 29, name: "Crods Azul", price: "S/ 90", image: "../img/zapato28.jpg" },
    { id: 30, name: "Sandalia Negro", price: "S/ 99", image: "../img/zapato29.webp" },
    { id: 31, name: "Sandalia Negro 2", price: "S/ 105", image: "../img/zapato30.jpg" },
    { id: 32, name: "Zapato Botas de Cuero Negro", price: "S/ 180", image: "../img/zapato31.jpg" },
    { id: 33, name: "Zapato Botas de Cuero Marron", price: "S/ 100", image: "../img/zapato32.webp" }
];

let currentPage = 1;
const itemsPerPage = 8;
let filteredProducts = products;

function renderProducts(page) {
    const start = (page - 1) * itemsPerPage;
    const end = page * itemsPerPage;
    const currentProducts = filteredProducts.slice(start, end);

    const productContainer = document.getElementById("product-list");
    productContainer.innerHTML = "";

    currentProducts.forEach(product => {
        const productCard = `
        <div class="col-md-3 mb-4">
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">Precio: ${product.price}</p>
                    <button class="btn btn-primary" onclick="openProductModal(${product.id})">Añadir</button>
                    </div>  </div>  </div>  `;
        productContainer.innerHTML += productCard;
    });
}
function renderPagination() {
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const paginationContainer = document.getElementById("pagination");
    paginationContainer.innerHTML = "";

    if (totalPages === 0) return;

    for (let i = 1; i <= totalPages; i++) {
        const pageItem = `
        <li class="page-item ${i === currentPage ? "active" : ""}">
            <a class="page-link" href="#" data-page="${i}">${i}</a>
        </li>
    `;
        paginationContainer.innerHTML += pageItem;
    }

    // Botón "Siguiente"
    if (currentPage < totalPages) {
        paginationContainer.innerHTML += `
        <li class="page-item">
            <a class="page-link" href="#" data-page="${currentPage + 1}">Siguiente</a>
        </li>
    `;
    }

    // Añadir eventos a los botones de paginación
    paginationContainer.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const page = parseInt(e.target.dataset.page);
            changePage(page);
        });
    });
}

// Cambiar de página
function changePage(page) {
    currentPage = page;
    renderProducts(page);
    renderPagination();
}

// Filtrar productos
function filterProducts() {
    const query = document.getElementById("search-input").value.toLowerCase();
    filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query)
        
    );
    if (filteredProducts.length === 0) {
productContainer.innerHTML = '<p>No se encontraron productos.</p>';
}
    currentPage = 1;
    renderProducts(currentPage);
    renderPagination();
}


// *******************************
// CARRRITO
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);

    const modalDetails = document.getElementById("modalProductDetails");
    modalDetails.innerHTML = `
    <div class="row">
        <div class="col-md-6">
            <img src="${product.image}" class="img-fluid rounded" alt="${product.name}">
        </div>
        <div class="col-md-6">
            <h4>${product.name}</h4>
            <p>Precio: <strong>${product.price}</strong></p>
            <div class="mb-3">
                <label for="size" class="form-label">Selecciona tu talla:</label>
                <select id="modalSize" class="form-select">
                    <option value="38">38</option>
                    <option value="39">39</option>
                    <option value="40">40</option>
                    <option value="41">41</option>
                    <option value="42">42</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="quantity" class="form-label">Cantidad:</label>
                <input type="number" id="modalQuantity" class="form-control" value="1" min="1">
            </div>
        </div>
    </div>
`;

    document.getElementById("modalAddToCart").dataset.productId = product.id;

    const productModal = new bootstrap.Modal(document.getElementById("productModal"));
    productModal.show();

}

// Añadir al carrito
document.getElementById("modalAddToCart").addEventListener("click", function () {
    const productId = this.dataset.productId;
    const product = products.find(p => p.id == productId);

    const size = document.getElementById("modalSize").value;
    const quantity = parseInt(document.getElementById("modalQuantity").value);

    cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        size: size,
        quantity: quantity,
        image: product.image
    });

    console.log("Carrito actualizado:", cart);

    const productModal = bootstrap.Modal.getInstance(document.getElementById("productModal"));
    productModal.hide();
});


// Inicializar
renderProducts(currentPage);
renderPagination();


let cart = JSON.parse(localStorage.getItem('cart')) || [];  // Recuperar carrito guardado si existe

function addToCart(productId, productName, productPrice) {
    // Buscar si el producto ya está en el carrito
    const existingProduct = cart.find(p => p.id === productId);

    if (existingProduct) {
        // Si ya existe, incrementar la cantidad y actualizar el total
        existingProduct.quantity++;
        existingProduct.total = existingProduct.quantity * existingProduct.price;
    } else {
        // Si no existe, agregar el producto al carrito
        cart.push({
            id: productId,
            name: productName,
            price: parseFloat(productPrice),
            quantity: 1,
            total: parseFloat(productPrice)
        });
    }

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    alert("Producto añadido al carrito");
}