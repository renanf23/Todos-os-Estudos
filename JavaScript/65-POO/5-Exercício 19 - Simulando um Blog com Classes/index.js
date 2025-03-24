const Author = require("./author");
const Post = require("./post");

const renan = new Author("Renan Ferreira");

const rico = renan.newPost("rico", "Como eu vou ficar milionário");

rico.newcomment("Foiii", "Marcelo");

console.log(renan);

console.log(rico);
