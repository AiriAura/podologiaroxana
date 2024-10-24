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