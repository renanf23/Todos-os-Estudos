let namep1 = prompt("Insira o nome do personagem 1: ");
let p1 = document.getElementById("namep1");
let dadosp1 = document.getElementById("dadosp1");
let poderatk = prompt("Insira o poder de ataque de " + namep1);

p1.innerHTML = namep1;
dadosp1.innerHTML = "Poder de Ataque: " + poderatk;

let namep2 = prompt("Insira o nome do personagem 2: ");
let p2 = document.getElementById("namep2");
let pontosDeVida = prompt("Insira os pontos de vida de " + namep2);
let poderDef = prompt("Insira o poder de defesa de " + namep2);
let dadosp2 = document.getElementById("dadosp2");
let escudo = prompt(namep2 + " possui escudo? (sim ou não)");

let atk = parseFloat(poderatk);
let def = parseFloat(poderDef);

let resposta = document.getElementById("resultado");

p2.innerHTML = namep2;
dadosp2.innerHTML =
  "Pontos de vida: " +
  pontosDeVida +
  "<br>Poder de defesa: " +
  poderDef +
  "<br>Escudo: " +
  escudo;
let dano = poderatk - poderDef;
if (atk > def && escudo === "não") {
  pontosDeVida = pontosDeVida - dano;
  resposta.innerHTML =
    "Dano causado: " + dano + "<br>Pontos de vida: " + pontosDeVida;
} else if (atk > def && escudo === "sim") {
  pontosDeVida = pontosDeVida - dano / 2;
  resposta.innerHTML =
    "Dano causado: " + dano + "<br>Pontos de vida: " + pontosDeVida;
} else {
  alert("O poder de ataque é menor ou igual a defesa o dano causado é 0");

  resposta.innerHTML = "Dano causado: 0 <br>Pontos de vida: " + pontosDeVida;
}
