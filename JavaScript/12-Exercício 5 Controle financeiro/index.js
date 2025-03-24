let dinheiro = prompt("Qual é a sua quantidade de dinheiro inicial?");
let opcoes;
dinheiro = parseFloat(dinheiro);
let adicionard;

do {
  opcoes = prompt(
    "Seu dinheiro atual é: " +
      dinheiro +
      "R$" +
      "\nEscolha uma das opções abaixo:\n" +
      "1 - Adicionar dinheiro\n" +
      "2 - Remover dinheiro\n" +
      "3 - Sair"
  );
  switch (opcoes) {
    case "1":
      adicionard = prompt("Quanto de dinheiro você deseja adicionar?");
      adicionard = parseFloat(adicionard);
      dinheiro += adicionard;
      break;
    case "2":
      dinheiro -= parseFloat(prompt("Quanto de dinheiro você deseja remover?"));
      break;
    case "3":
      alert("Programa encerrado você terminou com " + dinheiro + "R$");
      break;
    default:
      alert("Opção inválida por favor escolher outra opção!");
  }
} while (opcoes !== "3");
