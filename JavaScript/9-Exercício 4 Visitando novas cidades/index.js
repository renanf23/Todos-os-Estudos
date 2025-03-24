const nome = prompt("Olá turista! Qual é o seu nome?");

let javiajou = prompt("Você já viajou antes? (sim/não)");
let lugares = "";
let lugaresNovos = "sim";
let x = 0;

if (javiajou === "sim") {
  while (lugaresNovos === "sim") {
    let lugar = prompt("Para onde você viajou?");
    lugares += " - " + lugar + "\n";
    lugaresNovos = prompt("Tem mais lugares?");
    x++;
  }
  alert(nome + " visitou " + x + " lugares\n" + "E eles foram :\n" + lugares);
} else {
  alert("VocÊ não visitou nenhuma cidade fim do programa!");
}
