class Component {
  #component;
  constructor(id) {
    this.#component = this.build(id, id);
    this.id = id;
  }

  build(tagName, id) {
    const element = document.createElement(`${tagName}`);
    element.id = id;
    return element;
  }
  readid() {
    return this.#component;
  }
  render(local) {
    local.appendChild(this.#component);
    this.local = document.getElementById(`${this.id}`);
    return document.getElementById(`${this.id}`);
  }
}

class Input extends Component {
  constructor() {
    super("input");
  }
}

class Label extends Component {
  constructor(frase) {
    super("label");
    this.text(frase);
  }

  text(text) {
    const label = this.readid();
    return (label.innerText = text);
  }
}

class Form extends Component {
  constructor() {
    super("form");
  }

  addElements(elemento) {
    return this.local.append(elemento);
  }
}

const body = document.getElementById("body");

const element = new Component("h1");
const h3 = new Component("h3");
const input = new Input("input");
const textoh1 = new Label("Olá mundo!");
const textoh3 = new Label("Olá mundo!");
const nameLabel = new Label("Nome:");
const form = new Form();

console.log(element.render(body));
console.log(textoh1.render(element.local));
console.log(h3.render(body));
console.log(textoh3.render(h3.local));
form.render(body);

console.log(form.addElements(nameLabel.local));
//console.log(input.render(element.local));

//console.log(form.addElements(input.local));
