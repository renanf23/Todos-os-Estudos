function calcularMedia(a, b) {
  const media = (a + b) / 2;
  return media;
}

const resultado = calcularMedia(3, 9);

//console.log(resultado);

function criarProduto(nome, preco) {
  const produto = {
    nome,
    preco,
    estoque: 1,
  };
  return produto;
}

//console.log(criarProduto("Notebook Intel Core i3 8GB", 2500));

function areaRetangular(base, altura) {
  return base * altura;
}

function areaQuadrado(lado) {
  return areaRetangular(lado, lado);
}

//console.log(areaRetangular(3, 5));

//console.log(areaQuadrado(9));
function ola() {
  let texto = "...";
  return texto;
  texto = "Olá mundo";
  console.log(texto);
}

console.log(ola());

function maiorIdade(idade) {
  if (idade >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
}

console.log(maiorIdade(26));
console.log(maiorIdade(15));
