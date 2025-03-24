let opcao = "";
let base = "";
let altura = "";
do {
  opcao = prompt(
    "Calculadora geométrica\n" +
      "1- Cálcular área do triangulo\n" +
      "2- Cálcular área do retângulo\n" +
      "3- Cálcular área do quadrado\n" +
      "4- Cálcular área do trapézio\n" +
      "5- Cálcular área do círulo\n" +
      "6- Sair"
  );
  function mostrarResultado(resultado, caso) {
    alert("A área do " + caso + " é: " + resultado + "cm");
  }

  function basexAltura(base, altura) {
    return base * altura;
  }
  function pedirbase() {
    return parseFloat(prompt("Insira a base(cm):"));
  }
  function pedirAltura() {
    return parseFloat(prompt("Insira a altura(cm):"));
  }
  function pedirLado() {
    return parseFloat(prompt("Insira o lado(cm):"));
  }

  switch (opcao) {
    case "1":
      base = pedirbase();
      altura = pedirAltura();
      mostrarResultado(basexAltura(base, altura) / 2, "triangulo");
      break;
    case "2":
      mostrarResultado(basexAltura(pedirbase(), pedirAltura()), "retângulo");
      break;
    case "3":
      lado = pedirLado();
      mostrarResultado(basexAltura(lado, lado), "quadrado");
      break;
    case "4":
      let baseMaior = parseFloat(prompt("Insira a base maior:"));
      let baseMenor = parseFloat(prompt("Insira a base menor:"));
      mostrarResultado(
        basexAltura(baseMaior + baseMenor, pedirAltura()) / 2,
        "trapézio"
      );
      break;
    case "5":
      let raio = parseFloat(prompt("Insira o raio:"));
      let calraio = 3.14 * (raio * raio);
      mostrarResultado(calraio, "círculo");
    case "6":
      alert("Encerrando...");
      break;
    default:
      alert("Opção inválida!");
  }
} while (opcao != 6);
