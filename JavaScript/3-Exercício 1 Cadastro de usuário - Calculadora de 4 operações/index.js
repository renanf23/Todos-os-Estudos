let primeiron = prompt("Insira seu primeiro nome:");
let sobrenome = prompt("Insira seu Sobrenome:");
let campo = prompt("Insira seu Campo de estudo:");
let ano = prompt("Insira seu ano de nascimento:");

let nome1 = document.getElementById("primeiron");
let nome2 = document.getElementById("sobrenome");
let respestudo = document.getElementById("estudo");
let respidade = document.getElementById("idade");

let idade = 2023 - parseFloat(ano);

nome1.innerHTML += " " + primeiron;
nome2.innerHTML += " " + sobrenome;
respestudo.innerHTML += " " + campo;
respidade.innerHTML += " " + idade;

let confirmacao = confirm("Podemos ir para a calculadora?");
console.log(confirmacao);

if (confirmacao == true) {
  let numero1 = prompt("Insira o primeiro numero:");
  let numero2 = prompt("Insira o segundo numero:");
  let dados = document.getElementById("numeros");
  let respsoma = document.getElementById("soma");
  let respsub = document.getElementById("sub");
  let respmult = document.getElementById("mult");
  let respdiv = document.getElementById("div");

  dados.innerHTML =
    "<strong>N1:</strong> " + numero1 + "</br><strong>N2:</strong> " + numero2;
  1;
  let soma = parseFloat(numero1) + parseFloat(numero2);
  let sub = parseFloat(numero1) - parseFloat(numero2);
  let mult = parseFloat(numero1) * parseFloat(numero2);
  let div = parseFloat(numero1) / parseFloat(numero2);

  respsoma.innerHTML += " " + soma;
  respsub.innerHTML += " " + sub;
  respmult.innerHTML += " " + mult;
  respdiv.innerHTML += " " + div;
} else {
  alert("Fim.");
}
