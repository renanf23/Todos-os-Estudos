const Installment = require("./Installment");

module.exports = class Loan {
  static #juros = 5;

  constructor(valor, vezes) {
    this.valor = valor;
    this.vezes = vezes;
    this.#caljuros();
    this.date = new Date();
    this.installment = [];
    this.#installment();
  }

  static get juros() {
    console.log("entrou");
    return Loan.#juros;
  }
  static set ajusteDeJuros(valor) {
    Loan.#juros = valor;
  }

  #caljuros() {
    this.parcelas =
      ((this.valor * Loan.#juros) / 100 + this.valor) / this.vezes;
  }
  #installment() {
    for (let i = 0; i < this.vezes; i++) {
      const installment = new Installment(this.parcelas, i);
      this.installment.push(installment);
    }
  }
};

// const loan = new Loan(1000, 5);

// Loan.juros;
// Loan.ajusteDeJuros = 10;

// console.log(loan);

// const outro = new Loan(1000, 5);

// console.log(outro);
