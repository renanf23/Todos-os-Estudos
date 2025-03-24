let filaDeEspera = [];
let opcao = "";
let novoPaciente = "";
let consultaPaciente = "";

do {
  let fila = "";
  for (let i = 0; i < filaDeEspera.length; i++) {
    fila += i + 1 + " - " + filaDeEspera[i] + "\n";
  }
  opcao = prompt(
    "Fila de espera do atendimento:\n \n" +
      fila +
      "\nEscolha uma opção:\n" +
      "1-Novo paciente\n" +
      "2-Consultar paciente\n" +
      "3-Sair"
  );

  switch (opcao) {
    case "1":
      novoPaciente = prompt("Insira o nome do novo paciente");
      filaDeEspera.push(novoPaciente);
      break;
    case "2":
      consultaPaciente = filaDeEspera.shift();
      alert(
        "Paciente em consulta:\n \n" + consultaPaciente.toLocaleUpperCase()
      );
      break;
    case "3":
      alert("Finalizando programa...");
      break;
    default:
      alert("Opção inválida! Favor escolher uma opção válida");
  }
} while (opcao != "3");
