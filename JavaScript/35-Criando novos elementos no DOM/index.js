function addInput() {
  const ul = document.getElementById("inputs");

  const newLi = document.createElement("li");
  newLi.className = "list-item";
  newLi.innerText = "Novo input:";

  const newInput = document.createElement("input");
  newInput.type = "text";
  newInput.name = "input";

  const novo = document.querySelector;
  newLi.appendChild(newInput);
  ul.appendChild(newLi);
}
