const App = require("./App");

const app = new App();

app.createAuthor("J. R. R. Tolkien", "British", "...");
app.createAuthor("Rick Riordan", "American", "...");

const authors = app.getAuthors();

app.createBook(
  "O Hobbit",
  "...",
  "fantasy",
  "300",
  authors[0],
  "...",
  19.99,
  100
);
app.createBook(
  "A Sociedade do Anel",
  "...",
  "fantasy",
  400,
  authors[0],
  "...",
  24.99,
  100
);
app.createBook(
  "O Ladrão de Raios",
  "...",
  "fantasy",
  500,
  authors[1],
  "...",
  24.99,
  100
);
app.createBook(
  "A Pirâmide Vermelha",
  "...",
  "fantasy",
  600,
  authors[1],
  "...",
  24.99,
  100
);

const books = app.getBooks();

app.createPoster("Naruto", "foto do naruto", "80 cm", "50 cm", 20, 50);

const posters = app.getPosters();

app.createUser("Renan", "reinanfla@email.com", "dudstheboy");

const user = app.getUser();

app.showDatabase();

const items = [
  { product: books[0], quantity: 2 },
  {
    product: books[1],
    quantity: 1,
  },
  {
    product: books[3],
    quantity: 1,
  },
  {
    product: posters[0],
    quantity: 2,
  },
];

app.createOder(items, user);

app.showDatabase();
