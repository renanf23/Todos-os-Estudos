import { Component } from "./Component.js";

export class Form extends Component {
  constructor(parent, options) {
    super("Form", parent, options);
  }

  addChildren(...children) {
    children.forEach((child) => {
      this.getElement().appendChild(child.getElement());
    });
  }
}
