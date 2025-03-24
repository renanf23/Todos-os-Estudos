function add() {
  const time = document.getElementById("time");
  const inputposicao = document.getElementById("posicao");
  const inputnome = document.getElementById("nome");
  const inputnumber = document.getElementById("number");

  const jogador = document.createElement("ul");
  jogador.className = "jogador";
  const posicaojogador = document.createElement("li");
  posicaojogador.innerText = "Posição: " + inputposicao.value;
  jogador.appendChild(posicaojogador);
  jogador.appendChild(document.createElement("br"));

  const nomejogador = document.createElement("li");
  nomejogador.innerText = "Nome: " + inputnome.value;
  jogador.appendChild(nomejogador);
  jogador.appendChild(document.createElement("br"));

  const numberjogador = document.createElement("li");
  numberjogador.innerText = "Numero da camisa: " + inputnumber.value;
  jogador.id = inputnumber.value;
  jogador.appendChild(numberjogador);
  jogador.appendChild(document.createElement("br"));
  jogador.appendChild(document.createElement("br"));

  time.append(jogador);

  inputnome.value = "";
  inputposicao.value = "";
  inputnumber.value = "";
}

function remove() {
  const confirmar = confirm("deseja remover o jogador?");
  if (confirmar) {
    const time = document.getElementById("time");
    const inputremove = document.getElementById("removenumber");
    const jogador = document.getElementById(inputremove.value);

    jogador.remove();
  }
}
 