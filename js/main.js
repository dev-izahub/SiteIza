console.log("JavaScript carregado"); // Adicionando log para verificar se o script está sendo executado
var menuIcon = document.querySelector(".menu-icon");
var ul = document.querySelector(".ul");

menuIcon.addEventListener("click", () => {
  if (ul.classList.contains("ativo")) {
    ul.classList.remove("ativo");
    document.querySelector(".menu-icon img").src = "img/menu.png";
  } else {
    ul.classList.add("ativo");
    document.querySelector(".menu-icon img").src = "img/close.png";
  }
});

// contatos

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contatoForm");
  const submitButton = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Mostrar loading no botão
    const originalText = submitButton.textContent;
    submitButton.textContent = "Enviando...";
    submitButton.disabled = true;

    try {
      // Coletar dados do formulário
      const formData = new FormData(form);

      console.log("Formulário enviado"); // Adicionando log para verificar o envio
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        // Sucesso
        alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
        form.reset();
      } else {
        // Erro
        const data = await response.json();
        if (data.errors) {
          alert(
            "Erro ao enviar mensagem: " +
              data.errors.map((error) => error.message).join(", ")
          );
        } else {
          alert("Erro ao enviar mensagem. Tente novamente.");
        }
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro de conexão. Verifique sua internet e tente novamente.");
    } finally {
      // Restaurar botão
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    }
  });

  // Validação em tempo real
  const inputs = form.querySelectorAll("input, textarea");
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      if (input.checkValidity()) {
        input.style.borderColor = "#34b797";
      } else {
        input.style.borderColor = "#ff6b6b";
      }
    });
  });
});
