const arr = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandalf",
  "Aragorn",
  "Legolas",
  "Gimli",
];
console.log(arr);
//Adicionar elementos
//push

let tamanho = arr.push("Boromir");
console.log(arr);
console.log(tamanho);

//unshift
tamanho = arr.unshift("Teste");
console.log(arr);
console.log(tamanho);

//Remover Elementos
//pop
let ultimoElemento = arr.pop();
console.log(arr);
console.log(ultimoElemento);

//shift
let primeiroElemento = arr.shift();
console.log(arr);
console.log(primeiroElemento);

//Pesquisar por um elemento
//includes
const inclui = arr.includes("Gandalf");
console.log(inclui);

//indexOf
const indice = arr.indexOf("Gandalf");
console.log(indice);

//Cortar e Concatenar
//slice
const hobbits = arr.slice(0, 4);
const outros = arr.slice(-4);
console.log(arr);
console.log(hobbits);
console.log(outros);

//concat
const sociedade = hobbits.concat(outros, "Boromir");
console.log(sociedade);

//Substituição dos Elementos
//splice
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o cinzento");
console.log(sociedade);

//Iterar sobre os Elementos
for (let i = 0; i < sociedade.length; i++) {
  console.log(sociedade[i] + " se encontra na posição " + i);
}
