let palavra = prompt("Insira uma palavra: ");
let palavraInversa = "";

for (i = palavra.length - 1; i >= 0; i--) {
  palavraInversa += palavra[i];
}

if (palavra === palavraInversa) {
  alert("É um palíndromo");
} else {
  alert("Não é um palíndromo\n" + palavra + " - " + palavraInversa);
}
