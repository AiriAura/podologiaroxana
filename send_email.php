<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Configura tus variables
    $to = "geraldine_garces@soymas.cl"; // Tu correo electrónico
    $subject = "Nuevo mensaje desde el formulario de contacto";
    
    // Recibir los valores del formulario
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Estructura del mensaje
    $body = "Nombre: $name\nCorreo: $email\nMensaje:\n$message";
    
    // Cabeceras para el correo
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Enviar el correo
    if (mail($to, $subject, $body, $headers)) {
        // Redirige a una página de agradecimiento o muestra un mensaje de éxito
        echo "Mensaje enviado. Gracias por contactarnos.";
    } else {
        // Mensaje de error si falla el envío
        echo "Hubo un error al enviar el mensaje. Inténtalo de nuevo.";
    }
} else {
    echo "Hubo un problema con tu envío. Inténtalo de nuevo.";
}
?>