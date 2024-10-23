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
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Previene el envío normal del formulario

    // Recoger los datos del formulario
    const formData = new FormData(this);

    // Enviar los datos con fetch al archivo PHP
    fetch('send_email.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('result').innerHTML = data; // Muestra el resultado
    })
    .catch(error => {
        document.getElementById('result').innerHTML = 'Hubo un error al enviar el mensaje.';
        console.error('Error:', error);
    });
});