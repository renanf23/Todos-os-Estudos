module.exports = class Account {
  #saldo = 0;

  #historic = {
    depositos: [],
    emprestimos: [],
    transferencias: [],
  };

  constructor(user) {
    this.user = user;
  }

  seeDeposit() {
    console.table(this.#historic);
    console.table(this.#saldo);
    console.table(this.#historic.emprestimos);
  }
  saldo() {
    return console.log(`Seu saldo atual é R$${this.#saldo}.`);
  }
  #addsaldo(valor) {
    this.#saldo += valor;
  }
  #removesaldo(valor) {
    this.#saldo -= valor;
  }
  newDeposit(deposit) {
    this.#historic.depositos.push(deposit);
    this.#addsaldo(deposit.valor);
  }
  newLoan(loan) {
    this.#historic.emprestimos.push(loan);
    this.#addsaldo(loan.valor);
  }
  verParcelas(i) {
    console.table(this.#historic.emprestimos[i].installment);
  }
  pagarParcela(emprestimo, parcela) {
    this.#historic.emprestimos[emprestimo].installment[parcela].pagarparcela();
  }

  newTransfer(transfer) {
    if (transfer.to.name === this.user.name) {
      this.#addsaldo(transfer.valor);
      this.#historic.transferencias.push(transfer);
    } else if (transfer.from.name === this.user.name) {
      this.#removesaldo(transfer.valor);
      this.#historic.transferencias.push(transfer);
    }
  }
};

// const user = { name: "renan" };
// const conta = new Account(user);

// console.log(conta);
// conta.saldo();
// const deposito = { valor: 100, date: "hoje" };
// const emprestimo = { valor: 2000 };
// conta.newDeposit(deposito);

// console.log(conta);
// conta.saldo();

// conta.newLoan(emprestimo);

// conta.saldo();

// const deposito2 = { valor: 200 };
// conta.newDeposit(deposito2);
// console.log(conta);
// conta.saldo();

// const tranfer = { to: "renan", from: "marcelo", valor: 400 };

// conta.newTransfer(tranfer);
// console.log(conta);
// conta.saldo();

// const tranfer2 = { to: "marcelo", from: "renan", valor: 1500 };
// conta.newTransfer(tranfer2);
// console.log(conta);
// conta.saldo();

// console.log(deposito);
// console.log(conta);
// conta.seeDeposit();
