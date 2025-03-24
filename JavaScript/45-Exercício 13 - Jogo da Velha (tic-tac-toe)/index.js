const player1Name = document.getElementById("jogador1");
const player2Name = document.getElementById("jogador2");
const root = document.querySelector(":root");
const playersInput = document.getElementById("playersInput");
const winner = document.getElementById("winner");
let proximo = "";
document.getElementById("start").addEventListener("click", start);
let turno = 1;
let x = [];
let bola = [];

function start() {
  root.style.setProperty("--bg-color", "#212529");
  playersInput.remove();
  console.log(player1Name.value, player2Name.value);
  root.style.setProperty("--border-color", "#f1f5f9");
  root.style.setProperty("--font-color", "#f1f5f9");
  game();
}

function game() {
  document.querySelectorAll(".quadrados").forEach(function (quadrado) {
    const frase = document.createElement("h2");
    frase.innerText = "VEZ DO(A) " + player1Name.value;
    winner.innerText = "";
    winner.append(frase);
    quadrado.addEventListener("click", function (ev) {
      if (turno === 1 && quadrado.innerText == "") {
        const elemento = document.createElement("p");
        const frase = document.createElement("h2");
        frase.innerText = "VEZ DO(A) " + player2Name.value;
        winner.innerText = "";
        winner.append(frase);
        elemento.innerHTML = "X";
        quadrado.appendChild(elemento);
        x += quadrado.dataset.casa;
        console.log(x);
        turno = 2;
        teste();
      } else if (quadrado.innerText == "") {
        const elemento = document.createElement("p");
        elemento.innerHTML = "O";
        quadrado.appendChild(elemento);
        const frase = document.createElement("h2");
        frase.innerText = "VEZ DO(A) " + player1Name.value;

        winner.innerText = "";
        winner.append(frase);
        bola += quadrado.dataset.casa;
        console.log(bola);
        turno = 1;
        teste();
      }
    });
  });
}

function teste() {
  if (x.includes("1") && x.includes("2") && x.includes("3")) {
    bluewins();
    vencedor("1", "2", "3");
    return;
  } else if (x.includes("1") && x.includes("5") && x.includes("9")) {
    bluewins();
    vencedor("1", "5", "9");
    return;
  } else if (x.includes("1") && x.includes("4") && x.includes("7")) {
    bluewins();
    vencedor("1", "4", "7");
    return;
  } else if (x.includes("2") && x.includes("5") && x.includes("8")) {
    bluewins();
    vencedor("2", "5", "8");
    return;
  } else if (x.includes("3") && x.includes("6") && x.includes("9")) {
    bluewins();
    vencedor("3", "6", "9");
    return;
  } else if (x.includes("3") && x.includes("5") && x.includes("7")) {
    bluewins();
    vencedor("3", "5", "7");
    return;
  } else if (x.includes("4") && x.includes("5") && x.includes("6")) {
    bluewins();
    vencedor("4", "5", "6");
    return;
  } else if (x.includes("7") && x.includes("8") && x.includes("9")) {
    bluewins();
    vencedor("7", "8", "9");
    return;
  }

  if (bola.includes("1") && bola.includes("2") && bola.includes("3")) {
    redwins();
    vencedor("1", "2", "3");
    return;
  } else if (bola.includes("1") && bola.includes("5") && bola.includes("9")) {
    redwins();
    vencedor("1", "5", "9");
    return;
  } else if (bola.includes("1") && bola.includes("4") && bola.includes("7")) {
    redwins();
    vencedor("1", "4", "7");
    return;
  } else if (bola.includes("2") && bola.includes("5") && bola.includes("8")) {
    redwins();
    vencedor("2", "5", "8");
    return;
  } else if (bola.includes("3") && bola.includes("6") && bola.includes("9")) {
    redwins();
    vencedor("3", "6", "9");
    return;
  } else if (bola.includes("3") && bola.includes("5") && bola.includes("7")) {
    redwins();
    vencedor("3", "5", "7");
    return;
  } else if (bola.includes("4") && bola.includes("5") && bola.includes("6")) {
    redwins();
    vencedor("4", "5", "6");
    return;
  } else if (bola.includes("7") && bola.includes("8") && bola.includes("9")) {
    redwins();
    vencedor("7", "8", "9");
    return;
  }

  if (x.length + bola.length == 9) {
    velha();
  }
}

function bluewins() {
  root.style.setProperty("--bg-color", "#1E90FF");
  const frase = document.createElement("h2");
  winner.innerText = "";
  frase.innerText = "VENCEDOR " + player1Name.value + "!";
  winner.appendChild(frase);
  proximo = player2Name.value;
}

function redwins() {
  root.style.setProperty("--bg-color", " #B22222");
  const frase = document.createElement("h2");
  winner.innerText = "";
  frase.innerText = "VENCEDOR " + player2Name.value + "!";
  proximo = player1Name.value;
  winner.appendChild(frase);
}

function velha() {
  root.style.setProperty("--bg-color", "#FFD700");
  const frase = document.createElement("h2");
  frase.innerText = "DEU VELHA";
  winner.appendChild(frase);
}

document.getElementById("restart").addEventListener("click", function () {
  root.style.setProperty("--bg-color", "#212529");

  winner.innerText = "";

  const frase = document.createElement("h2");
  frase.innerText = "VEZ DO(A) " + proximo;
  winner.appendChild(frase);
  document.querySelectorAll(".quadrados").forEach(function (quadrado) {
    quadrado.innerText = "";
    x = [];
    bola = [];
    quadrado.classList.remove("destaque");
  });
});

function vencedor(x, y, z) {
  const element1 = document.querySelector("#quadrado" + x);
  const element2 = document.querySelector("#quadrado" + y);
  const element3 = document.querySelector("#quadrado" + z);
  element1.classList.add("destaque");
  element2.classList.add("destaque");
  element3.classList.add("destaque");
}
