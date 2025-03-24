const addtec = document.getElementById("add-button");
const devs = document.getElementById("devs-section");
const tecnologias = [];
const cadastrodev = [];

function criarbr() {
  const br = document.createElement("br");
  return br;
}
function criarinput(name, id, type = "text", value = "") {
  let input = document.createElement("input");
  input.name = name;
  input.id = id;
  input.type = type;
  input.value = value;
  return input;
}
function criarlabel(htmlFor, innerText) {
  let label = document.createElement("label");
  label.htmlFor = htmlFor;
  label.innerText = innerText;
  return label;
}

addtec.addEventListener("click", function (ev) {
  const form = document.createElement("form");
  form.id = "form" + (tecnologias.length + 1);
  const labelname = criarlabel("inputname", "Nome da tecnologia:");
  const inputname = criarinput("inputname", tecnologias.length + 1);

  const labelradio = document.createElement("label");
  labelradio.innerText = "Tempo de experiência:";

  let label2anos = criarlabel("tec2", "0-2 anos");
  let radioexp2 = criarinput(
    "tecexp" + (tecnologias.length + 1),
    "tec2" + (tecnologias.length + 1),
    "radio",
    "2anos"
  );
  let label4anos = criarlabel("tec4", "0-4 anos");
  let radioexp4 = criarinput(
    "tecexp" + (tecnologias.length + 1),
    "tec4" + (tecnologias.length + 1),
    "radio",
    "4anos"
  );
  let label5anos = criarlabel("tec5", "5+ anos");
  let radioexp5 = criarinput(
    "tecexp" + (tecnologias.length + 1),
    "tec5" + (tecnologias.length + 1),
    "radio",
    "5anos"
  );

  const removebutton = criarinput(
    "removebutton",
    tecnologias.length + 1,
    "button",
    "remover teclonogia"
  );
  removebutton.addEventListener("click", function (ev) {
    devs.removeChild(document.getElementById("form" + removebutton.id));
  });

  form.append(
    labelname,
    inputname,
    criarbr(),
    labelradio,
    radioexp2,
    label2anos,
    radioexp4,
    label4anos,
    radioexp5,
    label5anos,
    removebutton,
    criarbr(),
    criarbr()
  );
  tecnologias.push(inputname.id);
  console.log(tecnologias.length);

  devs.appendChild(form);
});
const form = document.getElementById("mainform");

form.addEventListener("submit", function (ev) {
  ev.preventDefault();
  console.log("foi");
  let dev = "";
  const name = document.getElementById("name").value;
  dev += "Nome: " + name;
  document.querySelectorAll("input[name='inputname']").forEach(function (item) {
    dev += "\n Tecnologia:" + item.value + "Experiencia: ";
    const exp = document.querySelector(
      "input[name='tecexp" + item.id + "']:checked"
    ).value;
    dev += exp;
  });

  console.log(dev);
  cadastrodev.push(dev);
  document.querySelectorAll("input[type='text']").forEach(function (item) {
    item.value = "";
  });
  document.querySelectorAll("input[type='radio']").forEach(function (item) {
    item.checked = false;
  });

  console.log(cadastrodev);
});
