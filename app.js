document.addEventListener('DOMContentLoaded', function () {
    // Smooth Scroll
    const links = document.querySelectorAll('nav a');
    
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetID = this.getAttribute('href');
            const targetSection = document.querySelector(targetID);
            
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });

    // Form validation
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('mensaje').value;

        if (!name || !email || !message) {
            alert('Por favor, rellena todos los campos.');
        } else {
            alert('Formulario enviado con éxito.');
            form.reset();
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".background-images img");
    let currentIndex = 0;

    // Función para mostrar la imagen actual
    function showCurrentImage() {
        images[currentIndex].classList.remove("active"); // Oculta la imagen actual
        currentIndex = (currentIndex + 1) % images.length; // Calcula el índice de la siguiente imagen
        images[currentIndex].classList.add("active"); // Muestra la siguiente imagen
    }

    // Cambia la imagen cada 5 segundos
    setInterval(showCurrentImage, 5000);
});
// app.js

// Arreglo para almacenar los productos en el carrito
let cart = [];

// Elementos del DOM
const cartItemsContainer = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

// Función para actualizar el carrito en la interfaz
function updateCart() {
    // Limpiar el contenedor de items del carrito
    cartItemsContainer.innerHTML = '';

    // Calcular el precio total
    let totalPrice = 0;

    // Iterar sobre el carrito y mostrar los productos
    cart.forEach(item => {
        const productElement = document.createElement('div');
        productElement.className = 'cart-item';
        productElement.innerHTML = `
            <h3>${item.name}</h3>
            <p>Precio: $${item.price}</p>
            <button class="btn remove-from-cart" data-id="${item.id}">Eliminar</button>
        `;
        cartItemsContainer.appendChild(productElement);
        totalPrice += item.price;
    });

    // Actualizar el total en el carrito
    totalPriceElement.textContent = `Total: $${totalPrice}`;
}

// Función para añadir producto al carrito
function addToCart(product) {
    cart.push(product);
    updateCart();
}

// Función para eliminar producto del carrito
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Event listener para los botones "Añadir al carrito"
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const productElement = e.target.closest('.product');
        const productId = parseInt(productElement.getAttribute('data-id'));
        const productName = productElement.querySelector('h3').textContent;
        const productPrice = parseInt(productElement.querySelector('.price').textContent.replace(/\D/g, ''));

        const product = { id: productId, name: productName, price: productPrice };
        addToCart(product);
    });
});

// Event listener para eliminar productos del carrito
cartItemsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-from-cart')) {
        const productId = parseInt(e.target.getAttribute('data-id'));
        removeFromCart(productId);
    }
});

// Event listener para vaciar el carrito
document.getElementById('clear-cart').addEventListener('click', () => {
    cart = [];
    updateCart();
});