time = [];

function mostar() {
  const sectiontime = document.getElementById("section-time");
  sectiontime.innerHTML = "";
  for (let i = 0; i < time.length; i++) {
    const sectiontime = document.getElementById("section-time");
    const jogador = document.createElement("ul");
    const posicaojogador = document.createElement("li");
    const nomejogador = document.createElement("li");
    const numerocamisaj = document.createElement("li");

    nomejogador.innerText = "Nome: " + time[i][0];
    posicaojogador.innerText = "Posição: " + time[i][1];
    numerocamisaj.innerText = "Numero da camisa: " + time[i][2] + "\n";
    jogador.append(nomejogador, posicaojogador, numerocamisaj);
    sectiontime.innerHTML += "<br>";
    sectiontime.appendChild(jogador);
  }
}

function escalar() {
  const posicao = document.getElementById("posicao");
  const nome = document.getElementById("nomejogador");
  const numerocamisa = document.getElementById("numerocamisa");
  const colocar = [nome.value, posicao.value, numerocamisa.value];
  time.push(colocar);
  mostar();
  nome.value = "";
  posicao.value = "";
  numerocamisa.value = "";
}

function remover() {
  const numerocamisa = document.getElementById("removercamisa");

  let posicao = "";
  function confirmar() {
    for (let i = 0; i < time.length; i++) {
      if (time[i][2] == numerocamisa.value) {
        posicao = i;
        return true;
      }
    }
  }

  if (confirmar()) {
    const ver = time.splice(posicao, 1);
    mostar();
  }
  numerocamisa.value = "";
}
