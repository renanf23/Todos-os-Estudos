const mediaAritimetica = (...argumentos) => {
  const x = argumentos.reduce((accum, num) => accum + num, 0);
  return x / argumentos.length;
};

//console.log(mediaAritimetica(2, 6, 3, 7, 4));

const mediaPonderada = (...argumentos) => {
  let soma = 0;
  let peso = 0;
  argumentos.forEach((item) => {
    const { n, p } = item;
    const x = n * p;
    soma = x + soma;
    peso = item.p + peso;
  });
  return soma / peso;
};

//console.log(mediaPonderada({ n: 7, p: 2 }, { n: 9, p: 5 }, { n: 3, p: 1 }));

const mediana = (...argumentos) => {
  const total = argumentos.length;
  if (total % 2 == 0) {
    return (argumentos[total / 2 - 1] + argumentos[total / 2]) / 2;
  } else {
    return argumentos[Math.floor(total / 2)];
  }
};

//console.log(mediana(2, 4, 5, 7, 42, 99));
//console.log(mediana(15, 14, 8, 7, 3));

const moda = (...argumentos) => {
  const quantidade = argumentos.map((num) => [
    num,
    argumentos.filter((n) => num === n).length,
  ]);
  quantidade.sort((a, b) => b[1] - a[1]);
  return quantidade[0][0];
};
console.log(moda(1, 1, 5, 99, 99, 99, 99, 99, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4));
