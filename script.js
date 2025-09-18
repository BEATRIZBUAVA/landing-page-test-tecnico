function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Validação do formulário de contato
document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var name = document.getElementById('name').value.trim();
      var email = document.getElementById('email').value.trim();
      var phone = document.getElementById('phone').value.trim();
      var message = document.getElementById('formMessage');
      if (!name || !email || !phone) {
        message.textContent = 'Por favor, preencha todos os campos.';
        message.style.color = '#d32f2f';
        return;
      }
      message.textContent = 'Enviado com sucesso!';
      message.style.color = '#04AA6D';
      form.reset();
    });
  }
});