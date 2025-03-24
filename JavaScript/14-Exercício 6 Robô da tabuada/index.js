let numero = parseFloat(prompt("Insira o número que você deseja a tabuada."));
let resultado = "";
for (let i = 1; i <= 20; i++) {
  resultado += numero + " x " + i + " = " + numero * i + "\n";
}
alert("Taubada de " + numero + ": \n" + resultado);
