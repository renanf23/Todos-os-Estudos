class User {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }

  login(entEmail, entPassword) {
    if (this.email === entEmail && this.password === entPassword) {
      console.log("Login feito com sucesso!");
    } else {
      console.log("ERRO! O email e(ou) senha estão incorretos.");
    }
  }
}

const rwei = new User(
  "Renan Ferreira dos Santos",
  "reinanfla@gmail.com",
  "1234"
);

rwei.login("reinanfla@gmail.com", "1234");
rwei.login("reinanfla2@gmail.com", "1234");
rwei.login("reinanfla@gmail.com", "12345");
