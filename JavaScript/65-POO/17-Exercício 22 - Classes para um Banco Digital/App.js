const Account = require("./entities/Account");
const Deposit = require("./entities/Deposit");
const Loan = require("./entities/Loan");
const Transfer = require("./entities/Transfer");
const User = require("./entities/User");

class App {
  static #dataBase = {
    users: [],
  };

  static createUser(name, email) {
    const user = new User(name, email);

    const userExist = App.#dataBase.users.find((u) => u.email === user.email);

    if (!userExist) {
      console.log(userExist);
      App.#dataBase.users.push(user);
      return user;
    } else {
      console.log(`Error: User ${user.email} already exists`);
    }
  }

  static showDataBase() {
    console.table(App.#dataBase.users);
  }

  static findUserEmail(email) {
    const userExist = App.#dataBase.users.find((u) => u.email === email);
    if (userExist) {
      return userExist;
    } else {
      console.log(`Error: User "${email}" not exists`);
    }
  }

  static deposit(user, valor) {
    const deposit = new Deposit(valor);
    user.account.newDeposit(deposit);
  }
  static transfer(to, from, valor) {
    const transfer = new Transfer(to, from, valor);

    to.account.newTransfer(transfer);
    from.account.newTransfer(transfer);
  }
  static loan(user, valor, vezes) {
    const loan = new Loan(valor, vezes);
    user.account.newLoan(loan);
  }
}

// App.showDataBase();

const renan = App.createUser("Renan", "reinanfla@gmail.com", "123456");

// App.showDataBase();

const fabricio = App.createUser("Fabricio", "fabricio@gmail.com", "1234567");

// App.createUser("Marcelo", "reinanfla@gmail.com", "1234567");

App.showDataBase();

console.log(App.findUserEmail("reinanfla@gmail.com"));
App.findUserEmail("email@gmail.com");

renan.account.saldo();
renan.account.seeDeposit();
App.deposit(renan, 100);
App.deposit(renan, 250);
App.transfer(renan, fabricio, 100);

renan.account.seeDeposit();
fabricio.account.seeDeposit();

App.loan(renan, 100, 4);
renan.account.seeDeposit();
renan.account.verParcelas(0);
renan.account.pagarParcela(0, 1);
Loan.ajusteDeJuros = 10;
console.log(Loan.juros);
App.loan(renan, 100, 4);
renan.account.verParcelas(0);
renan.account.verParcelas(1);
