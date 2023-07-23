<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  // Obtener los datos del formulario
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Correo de destino (tu dirección de correo electrónico)
  $to = "jaym.contacto@gmail.com";

  // Asunto del correo
  $subject = "Formulario de contacto";

  // Cuerpo del correo
  $body = "Nombre: $name\n";
  $body .= "Correo electrónico: $email\n";
  $body .= "Mensaje:\n$message";

  // Cabeceras del correo
  $headers = "From: $email\r\n";
  $headers .= "Reply-To: $email\r\n";

  // Enviar el correo
  if (mail($to, $subject, $body, $headers)) {
    // Éxito al enviar el correo
    echo "success";
  } else {
    // Error al enviar el correo
    echo "error";
  }
}
?>
