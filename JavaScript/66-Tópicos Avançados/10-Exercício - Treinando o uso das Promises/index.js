function calculoImc(peso, altura) {
  return new Promise((result, reject) => {
    if (typeof peso == "number" && typeof altura == "number") {
      const imc = peso / (altura * altura);

      result(imc);
    } else {
      reject(`Erro o peso e/ou a altura não são do tipo número.`);
    }
  });
}

function imc(peso, altura) {
  calculoImc(peso, altura)
    .then((result) => {
      let alternativa = 0;
      if (result < 18.5) {
        alternativa = 1;
      } else if (result > 18.5 && result < 24.9) {
        alternativa = 2;
      } else if (result > 24.9 && result < 29.9) {
        alternativa = 3;
      } else if (result > 29.9 && result < 39.9) {
        alternativa = 4;
      } else {
        alternativa = 5;
      }
      switch (alternativa) {
        case 1:
          console.log(`Seu imc é ${result} e sua condição é magreza`);
          break;
        case 2:
          console.log(`Seu imc é ${result} e sua condição é normal`);
          break;
        case 3:
          console.log(`Seu imc é ${result} e sua condição é sobrepeso`);
          break;
        case 4:
          console.log(`Seu imc é ${result} e sua condição é obesidade`);
          break;
        case 5:
          console.log(`Seu imc é ${result} e sua condição é obesidade grave!`);
          break;
        default:
          console.log("Erro tente novamente!");
          break;
      }
    })
    .catch((reject) => {
      console.log(reject);
    });
  console.log(`Fazendo os calculos...`);
}

imc(140, 1.82);
