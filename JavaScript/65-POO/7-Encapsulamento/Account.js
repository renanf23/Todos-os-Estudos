class Account {
  #password;
  #balance = 0;
  constructor(user) {
    this.email = user.email;
    this.#password = user.password;
  }

  getBalance(email, password) {
    if (this.#authenticate(email, password)) {
      return this.#balance;
    } else {
      return null;
    }
  }

  #authenticate(email, password) {
    return email === user.email && password == user.password;
  }
}

const user = {
  email: "renan@email.com",
  password: "123456",
};

const myAccount = new Account(user);

console.log(myAccount.getBalance("renan@email.com", "123456"));
