let opcoes;

do {
  opcoes = prompt(
    "Escolha uma das opções abaixo\n" +
      "Menu Interativo: \n" +
      "1- Nada\n" +
      "2- Nada\n" +
      "3- Nada\n" +
      "4- Nada\n" +
      "5- Encerrar\n"
  );
  switch (opcoes) {
    case "1":
      alert("Opção 1 selecionada!");
      break;
    case "2":
      alert("Opção 2 selecionada!");
      break;
    case "3":
      alert("Opção 3 selecionada!");
      break;
    case "4":
      alert("Opção 4 selecionada!");
      break;
    case "5":
      alert("Opção 5 selecionada!\n" + "Fim do programa!");
      break;
    default:
      alert("Opção Inválida!\n" + "Por favor selecionar outra opção");
      break;
  }
} while (opcoes !== "5");
