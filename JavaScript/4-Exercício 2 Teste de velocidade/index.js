let modeloCarro1 = prompt("Insira o modelo do carro 1: ");
let velCarro1 = prompt("Insira a velocidade do carro 1 em km: ");
let modeloCarro2 = prompt("Insira o modelo do carro 2: ");
let velCarro2 = prompt("Insira a velocidade do carro 2: ");

let dadosCarro1 = document.getElementById("velc1");
let dadosCarro2 = document.getElementById("velc2");
let resposta = document.getElementById("resultado");

dadosCarro1.innerHTML =
  "O modelo do carro é: " +
  modeloCarro1 +
  "<br> A velocidade do carro é: " +
  velCarro1 +
  "km";

dadosCarro2.innerHTML =
  "O modelo do carro é: " +
  modeloCarro2 +
  "<br> A velocidade do carro é: " +
  velCarro2 +
  "km";

if (velCarro1 > velCarro2) {
  resposta.innerHTML =
    "O Carro mais rápido é o " + modeloCarro1 + " com " + velCarro1 + "km";
} else if (velCarro1 < velCarro2) {
  resposta.innerHTML =
    "O Carro mais rápido é o " + modeloCarro2 + " com " + velCarro2 + "km";
} else {
  resposta.innerHTML =
    "Os Carros tem a mesma velocidade que é: " + velCarro2 + "km";
}
