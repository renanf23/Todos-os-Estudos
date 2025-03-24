class Product {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = 0;
  }
  addStock(quantidade) {
    console.log(`Quantidade em estoque inicial: ${this.inStock}`);
    this.inStock += quantidade;
    console.log(`Quantidade em estoque atual: ${this.inStock}`);
  }
  calculateDiscount(valor) {
    console.log(`Preço inicial: ${this.price}`);
    const desconto = (this.price * valor) / 100;
    this.price = this.price - desconto;
    console.log(`Preço com desconto: ${this.price}`);
  }
}

const cafe = new Product("Café", "Pó de café", 100);

cafe.addStock(35);
cafe.calculateDiscount(51);
console.log(cafe);
