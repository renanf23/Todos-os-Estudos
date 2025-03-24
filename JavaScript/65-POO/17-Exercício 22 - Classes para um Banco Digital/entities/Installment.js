module.exports = class Installment {
  constructor(valor, numero) {
    this.valor = valor;
    this.numero = numero;
    this.situacao = "pendente";
  }



  pagarparcela() {
    this.situacao = "pago";
  }
};

// const parcela = new Installment(1000, 5);

// console.log(parcela);
// parcela.pagarparcela();
// console.log(parcela);
