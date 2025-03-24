let baralho = [];
let opcao = "";
do {
  let cartas = "";
  for (i = 0; i < baralho.length; i++) {
    cartas += baralho[i] + "\n";
  }
  opcao = prompt(
    "Pilha de cartas\n" +
      cartas +
      "\n1-Adicionar carta\n" +
      "2-Puxar carta\n" +
      "3-Sair\n"
  );

  switch (opcao) {
    case "1":
      let adicionarCarta = prompt("Digite o nome da carta:");
      baralho.unshift(adicionarCarta);
      break;
    case "2":
      let puxarCarta = baralho.shift();
      alert("Carta puxada: \n\n" + puxarCarta);
      break;
    case "3":
      alert("Finalizando programa!...");
      break;
    default:
      alert("Opção inválida!");
  }
} while (opcao != "3");
