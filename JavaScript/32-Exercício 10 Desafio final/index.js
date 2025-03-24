let vagas = [];
let candidatos = [];
let opcao = "";
do {
  opcao = window.prompt(
    "VAGAS.COM\n\n" +
      "Escolha uma opção: " +
      "\n\n" +
      "1 - Lista de vagas \n" +
      "2 - Criar nova vaga \n" +
      "3 - Vizualizar uma vaga \n" +
      "4 - Inscrever um candidato em uma vaga \n" +
      "5 - Excluir uma vaga \n" +
      "6 - Sair"
  );

  switch (Number(opcao)) {
    case 1:
      if (vagas.length == 0) {
        window.alert("Sem vagas no momento.");
      } else {
        let anuncio = [];

        for (let i = 0; i < vagas.length; i++) {
          let numerodecandidatos = candidatos.filter(function (nome) {
            return nome.idvaga === vagas[i].nome;
          });

          let candidatosvaga = numerodecandidatos.length;

          anuncio +=
            "Vaga " +
            [i + 1] +
            " " +
            vagas[i].nome +
            " N° de Candidatos: " +
            candidatosvaga +
            "\n";
        }

        alert("Todas as vagas: \n" + anuncio);
      }
      break;
    case 2:
      let vaga = {};
      vaga.nome = window.prompt("Nome da vaga:");
      vaga.descricao = window.prompt("Descrição da vaga:");
      vaga.datalimite = window.prompt("Data limite para a vaga?");

      confirmacao(
        vaga.nome,
        vaga.descricao,
        vaga.datalimite,
        "Vaga criada com sucesso!",
        vaga
      );

      break;
    case 3:
      let buscarvaga = window.prompt("Digite no número da vaga: ");
      if (Number(buscarvaga) <= vagas.length) {
        buscarvaga = buscarvaga - 1;
        mostrarvaga(
          buscarvaga,
          vagas[buscarvaga].nome,
          vagas[buscarvaga].descricao,
          vagas[buscarvaga].datalimite
        );
      } else {
        alert("Numero de vaga inválido!");
      }
      break;
    case 4:
      let candidato = {};
      candidato.id = window.prompt("Insira o nome do candidato: ");
      let i = Number(window.prompt("Insira o indice da vaga:"));

      if (i <= vagas.length) {
        i = i - 1;
        candidato.idvaga = vagas[i].nome;
        candidatos.push(candidato);
      } else {
        alert("Numero de vaga inválido!");
      }

      break;
    case 5:
      let numerodavaga = Number(prompt("Digite o número da vaga:"));
      numerodavaga = numerodavaga - 1;

      let nomedocandidato = candidatos.filter(function (nome) {
        return nome.idvaga === numerodavaga;
      });
      console.log(nomedocandidato);

      for (let i = 0; i < nomedocandidato.length; i++) {
        let posicao = candidatos.indexOf(nomedocandidato[i]);

        console.log(posicao);
        console.log(candidatos);
        candidatos.splice(posicao, 1);
      }
      vagas.splice(numerodavaga, 1);
      console.log(candidatos);

      break;
    case 6:
      window.alert("Fim do Programa!");
      break;
    default:
      window.alert("Opção Inválida! Favor escolha outra opção.");
  }
} while (opcao !== "6");

function confirmacao(nome, descricao, datalimite, msgconf, vaga) {
  let confirmarvaga = window.confirm(
    "Criar essa vaga?\n" +
      "\nNome da vaga: " +
      nome +
      "\nDescrição da vaga: " +
      descricao +
      "\nData limite da vaga: " +
      datalimite
  );
  if (confirmarvaga == true) {
    window.alert(msgconf);
    vagas.push(vaga);
  }
}

function mostrarvaga(indice, nome, descricao, datalimite) {
  let candidatosvaga = ["Nome dos candidatos:"];

  let numerodecandidatos = candidatos.filter(function (nomes) {
    return nomes.idvaga === nome;
  });

  if (numerodecandidatos.length > 0) {
    for (let i = 0; i < numerodecandidatos.length; i++) {
      let nomecandidato = numerodecandidatos[i].id;

      candidatosvaga += "\n" + nomecandidato;
    }
  }

  alert(
    "Vaga " +
      (indice + 1) +
      "\nNome da vaga: " +
      nome +
      "\nDescrição da vaga: " +
      descricao +
      "\nData limite da vaga: " +
      datalimite +
      "\n\n " +
      candidatosvaga
  );
}
