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

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const assunto = document.getElementById("assunto").value;
    const mensagem = document.getElementById("mensagem").value;

    console.log("Nome:", nome);
    console.log("E-mail:", email);
    console.log("Assunto:", assunto);
    console.log("Mensagem:", mensagem);

    alert("Formulário capturado com sucesso!");

    form.reset();
  });
});
