const Author = require("./Author");

const john = new Author("John Doe");

const post = john.writepost("Titulo do post", "Loren  ipsun dolor sic...");

post.addComment("Isaac Pontes", "Muito bom.!");
post.addComment("Lucas", "Achei interessante.");

console.log(john);
console.log(post);
