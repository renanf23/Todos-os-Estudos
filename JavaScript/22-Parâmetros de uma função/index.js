function dobro(x){
  alert("O dobro de " + x + " é " + (x * 2))
}

//dobro(5)
//dobro(7)

//dobro()

function dizerOla(nome = "Mundo") {
  alert("Olá, " + nome + "!")
}

//dizerOla("Renan")
//dizerOla()

function soma(a, b){
  alert("A soma de " + a + " + " + b + " é: " + (a + b))
}

//soma(7, 6)

function criarUsuario(nome, email, senha, tipo="admin"){
 const usuario= {
  nome, // mesmo que nome: nome
  email,
  senha,
  tipo
 }
 console.log(usuario)
}


function muitosParametros(nome, telefone, endereco, aniversario, email, senha){
  // ...
}

function objetoComoParametro(usuario){
  //...
  usuario.nome
  usuario.email
}

muitosParametros("nome", "telefone", "endereco", "aniversario", "email", "senha" )

const dadosDoUsuario = {
  nome:"",
  telefone:"",
  endereco:"",
  aniversario: "",
  email:"",
  senha:""
}

objetoComoParametro(dadosDoUsuario)