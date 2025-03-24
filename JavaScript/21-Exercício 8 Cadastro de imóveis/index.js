let imoveis = [];
let opcao = "";
do {
  opcao = prompt(
    "MENU DE IMÓVEIS\n" +
      "Quantidade de imóveis cadastrados: " +
      imoveis.length +
      "\n\n1-Salvar um imóvel" +
      "\n2-Ver todos imóveis cadastrados" +
      "\n3-Sair"
  );

  switch (opcao) {
    case "1":
      let imovel = {};
      imovel.prop = prompt("Nome do proprietário:");
      imovel.quartos = prompt("Quantidade de quartos:");
      imovel.banheiros = prompt("Quantide de banheiro:");
      imovel.garagem = prompt("Possui garagem?(sim/não)");
      imoveis.push(imovel);
      break;

    case "2":
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Imóvel " +
            (i + 1) +
            "\nNome do proprietário: " +
            imoveis[i].prop +
            "\nNumero de quartos: " +
            imoveis[i].quartos +
            "\nNumero de banheiros: " +
            imoveis[i].banheiros +
            "\nPossui garagem? " +
            imoveis[i].garagem
        );
      }
      break;
    case "3":
      alert("Finalizando...");
      break;
    default:
      alert("Opção inválida!");
  }
} while (opcao != "3");
