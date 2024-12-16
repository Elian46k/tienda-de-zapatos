const products = [
    { name: "Zapato Deportivo", price: 120.00, quantity: 2 },
    { name: "Zapato Casual", price: 85.50, quantity: 1 },
    { name: "Sandalias", price: 45.99, quantity: 3 }
];

function loadCartItems() {
    const cartItems = document.getElementById('cart-items');
    const totalAmount = document.getElementById('total-amount');
    let total = 0;

    products.forEach(product => {
        const subtotal = product.price * product.quantity;
        total += subtotal;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.name}</td>
            <td>S/ ${product.price.toFixed(2)}</td>
            <td>${product.quantity}</td>
            <td>S/ ${subtotal.toFixed(2)}</td>
        `;

        cartItems.appendChild(row);
    });

    totalAmount.textContent = `S/ ${total.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', loadCartItems);

document.querySelectorAll('input[name="payment-method"]').forEach(input => {
    input.addEventListener('change', function () {
        if (this.value === 'Tarjeta') {
            document.getElementById('card-details').style.display = 'block';
            document.getElementById('qr-payment-details').style.display = 'none';
        } else if (this.value === 'QR') {
            document.getElementById('card-details').style.display = 'none';
            document.getElementById('qr-payment-details').style.display = 'block';
        }
    });
});

document.getElementById('payment-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const tarjeta = document.getElementById('tarjeta').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;

    alert(`Pago procesado correctamente:\n\nNombre: ${nombre}\nEmail: ${email}\nTarjeta: ${tarjeta}\nFecha de Expiración: ${expiryDate}\nCVV: ${cvv} \nSE VERIFICARA EL PAGO`);
});