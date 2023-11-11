
$(document).ready(function () {
  $("#sign-in-btn").click(function(event) {
    var validationFailed = false;
    var email = $("#email").val();
    var nombre = $("#nombre").val();
    var nombreUsuario = $("#nombre").val();
    var apellido = $("#apellido").val();
    var password = $("#password").val();
    var password2 = $("#password2").val();

    localStorage.setItem('nombreUsuario', nombreUsuario);

    if (!isValidName(nombre)) {
      alert("Ingrese un nombre válido");
      event.preventDefault();
      validationFailed = true;
    }

    if (!isValidName(apellido)) {
      alert("Ingrese un apellido válido");
      event.preventDefault();
      validationFailed = true;
    }

    if (!isValidEmail(email)) {
      alert("Ingrese una dirección de correo electrónico válida");
      event.preventDefault();
      validationFailed = true;
    }
  
    if (password !== password2 || password.length == 0) {
      alert("Las contraseñas no coinciden. Por favor, inténtelo de nuevo.");
      event.preventDefault();
      validationFailed = true;
    }

    if (!validationFailed) {
      window.location.href = "home.html";
  }
  });

  function isValidName(name) {
    var re = /^[a-zA-Z]{2,}$/;
    console.log(name);
    return re.test(name);
  }

  function isValidEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(String(email).toLowerCase());
  }



});
