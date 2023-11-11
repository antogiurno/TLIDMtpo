$(document).ready(function () {
  $("#sign-in-btn").click(function(event) {
    var validationFailed = false;
    var email = $("#email").val();
    var password = $("#password").val();


    if (!isValidEmail(email)) {
      alert("Ingrese una dirección de correo electrónico válida");
      event.preventDefault();
      validationFailed = true;
    }
  
    if (password.length == 0) {
      alert("Ingrese un valor para la contraseña.");
      event.preventDefault();
      validationFailed = true;
    }

    if (!validationFailed) {
      window.location.href = "home.html";
  }
  });

  function isValidName(name) {
    var re = /^[a-zA-Z]{2,}$/;
    return re.test(name);
  }

  function isValidEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(String(email).toLowerCase());
  }

});
