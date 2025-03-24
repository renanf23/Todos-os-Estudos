module.exports = class Transfer {
  constructor(from, to, valor) {
    this.to = to;
    this.from = from;
    this.valor = valor;
    this.date = new Date();
  }
};

// const renan = { name: "renan", email: "reinan", conta: "123447" };
// const marcelo = { name: "Marcelo", email: "marcelin", conta: "123447" };

// const transf = new Transfer(renan, marcelo, 3000);

// console.log(transf);
