const form = document.querySelector("form");
const email = document.querySelector('input[type="text"]');
const senha = document.querySelector('input[type="password"]');
const usuario = {};

form.addEventListener("submit", function (ev) {
  ev.preventDefault();
  if (email.value === "") {
    alert("O preenchimento do campo email é obrigatório.");
  } else {
    verificarEmail(email.value);
  }
  if (senha.value === "") {
    alert("O preenchimento do campo senha é obrigatório.");
  } else {
    verificarSenha(senha.value);
  }
});

function verificarEmail(email) {
  try {
    const emailarroba = email.match(/@/);
    const textoant = email.match(/\w+(?=\@)/g)[0].length;
    const textodep = email.match(/(?<=\@)\w+/g)[0].length;
    const textoponto = email.match(/(?<=\.)\w+/g)[0].length;
    if (!emailarroba || textoant < 2 || textodep < 2 || textoponto < 2) {
      throw new Error("O email é inválido!");
    } else {
      usuario.email = email;
    }
  } catch (error) {
    alert(error.message);
  }
}

function verificarSenha(senha) {
  try {
    const maiuscula = senha.match(/[A-Z]/);
    const minuscula = senha.match(/[a-z]/);
    const numero = senha.match(/[\d]/);
    const especial = senha.match(/[\W]/);

    if (!maiuscula || !minuscula || !numero || !especial || senha.length < 8) {
      throw new Error("A senha é inválida!");
    } else {
      usuario.senha = senha;
      console.log(usuario);
    }
  } catch (error) {
    alert(error.message);
  }
}
