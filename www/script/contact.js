$(document).ready(function() {
  $('#contact-form').submit(function(e) {
    e.preventDefault(); // Prevent the form from submitting normally

    // Get the form data
    var formData = {
      nombre: $('#nombre').val(),
      email: $('#email').val(),
      mensaje: $('#mensaje').val()
    };

    // Send the form data to the server-side script
    $.ajax({
      type: 'POST',
      url: 'send_email.php', // Replace with the path to your server-side script
      data: formData,
      success: function(response) {
        // Display a success message to the user
        alert(response);
      },
      error: function() {
        // Display an error message to the user
        alert('Hubo un problema al enviar el mensaje');
      }
    });
  });
});
