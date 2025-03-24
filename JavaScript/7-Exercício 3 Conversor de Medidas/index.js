let x = prompt("Insira o valor em metros:");
let medida = parseFloat(x);
let opcao = prompt(
  "Escolha a opção para qual medida você deseja converter:" +
    "\na)Milímetro(mm)" +
    "\nb)Centímetro(cm)" +
    "\nc)Decímetro(dm)" +
    "\nd)Decâmetro(dam)" +
    "\ne)Hectômetro(hm)" +
    "\nf)quilômetro(km)"
);

switch (opcao) {
  case "a":
    medida *= 1000;
    alert("A conversão de " + x + "m para milímetros é " + medida + "mm");
    break;
  case "b":
    medida *= 100;
    alert("A conversão de " + x + "m para centímetros é " + medida + "cm");
    break;
  case "c":
    medida *= 10;
    alert("A conversão de " + x + "m para decémetros é " + medida + "dm");
    break;
  case "d":
    medida /= 10;
    alert("A conversão de " + x + "m para decâmetros é " + medida + "dam");
    break;
  case "e":
    medida /= 100;
    alert("A conversão de " + x + "m para hectômetros é " + medida + "hm");
    break;
  case "f":
    medida /= 1000;
    alert("A conversão de " + x + "m para quilômetros é " + medida + "km");
    break;
  default:
    alert("Opção inválida, por favor insira uma opção válida.");
}
