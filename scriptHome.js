$(document).ready(function() {
  var nombreUsuario = localStorage.getItem('nombreUsuario');

  // Verificar si nombreUsuario no es null o undefined antes de establecer el texto
  if (nombreUsuario) {
    $("#mensaje-bienvenida").text("Bienvenido " + nombreUsuario);
  }
});
