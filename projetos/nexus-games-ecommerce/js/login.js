/* Nexus Games — validação demonstrativa de login */
(function () {
  "use strict";

  const form = document.getElementById("loginForm");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const remember = document.getElementById("remember");
  const alertBox = document.getElementById("loginAlert");
  const togglePassword = document.getElementById("togglePassword");

  function showAlert(message, type) {
    alertBox.textContent = message;
    alertBox.className = `alert alert-${type}`;
    alertBox.classList.remove("d-none");
  }

  const savedEmail = localStorage.getItem("nexusGamesEmail");
  if (savedEmail) {
    email.value = savedEmail;
    remember.checked = true;
  }

  togglePassword.addEventListener("click", function () {
    const isPassword = password.type === "password";
    password.type = isPassword ? "text" : "password";
    this.innerHTML = `<i class="bi ${isPassword ? "bi-eye-slash" : "bi-eye"}"></i>`;
    this.setAttribute("aria-label", isPassword ? "Ocultar senha" : "Mostrar senha");
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    event.stopPropagation();
    alertBox.classList.add("d-none");
    form.classList.add("was-validated");

    if (!form.checkValidity()) {
      showAlert("Revise os campos destacados antes de continuar.", "danger");
      return;
    }

    if (remember.checked) localStorage.setItem("nexusGamesEmail", email.value.trim());
    else localStorage.removeItem("nexusGamesEmail");

    const submitButton = form.querySelector("button[type='submit']");
    submitButton.disabled = true;
    submitButton.querySelector("span").textContent = "Validando...";

    window.setTimeout(function () {
      showAlert("Login validado com sucesso! Esta demonstração não envia dados.", "success");
      submitButton.disabled = false;
      submitButton.querySelector("span").textContent = "Entrar";
      password.value = "";
      form.classList.remove("was-validated");
    }, 750);
  });

  $("#forgotPassword").on("click", function () {
    showAlert("Informe seu e-mail. Em um sistema real, enviaremos as instruções de recuperação.", "primary");
    email.focus();
  });

  $("#createAccount").on("click", function () {
    showAlert("O cadastro não faz parte desta entrega. A página demonstra o fluxo de login.", "primary");
  });
}());
