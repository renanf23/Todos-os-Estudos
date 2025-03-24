function tranferencias(transfer) {
  const div = document.createElement("div");
  div.classList.add("div");
  div.id = transfer.id;

  const name = document.createElement("h4");
  name.textContent = transfer.name;

  const value = document.createElement("p");
  value.innerText = `Id: ${transfer.id} \n
  Tipo da transação: ${transfer.opcao}\n
  Valor: R$  ${transfer.value}`;

  div.append(name, value);
  document.querySelector("#transfer").appendChild(div);

  saldoDaConta();
}

async function fetchTranfers() {
  document.querySelector("#transfer").innerHTML = "";
  const transfers = await fetch("http://localhost:3000/transfer").then((res) =>
    res.json()
  );

  transfers.forEach(tranferencias);
}

const form = document.querySelector("#form");
form.addEventListener("submit", async (ev) => {
  ev.preventDefault();

  const newTransfer = {
    name: document.querySelector("#nome").value,
    value: document.querySelector("#valor").value,
    opcao: document.querySelector("#opcao").value,
  };

  const response = await fetch("http://localhost:3000/transfer", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTransfer),
  });

  const savedTransfer = await response.json();
  form.reset();
  tranferencias(savedTransfer);
});

const editForm = document.querySelector("#editTransfer");
editForm.addEventListener("submit", async (ev) => {
  ev.preventDefault();
  const idTranfer = document.querySelector("#idForEdit").value;
  const novoNome = document.querySelector("#novoNome").value;
  const novaopt = document.querySelector("#novaopcao").value;
  const novoValor = document.querySelector("#novoValor").value;

  const newTransfer = {
    name: novoNome,
    opcao: novaopt,
    value: novoValor,
  };

  const response = await fetch(`http://localhost:3000/transfer/${idTranfer}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTransfer),
  });

  const novaTransfer = document.getElementById(`${idTranfer}`);

  const name = document.createElement("h4");
  name.textContent = novoNome;

  const value = document.createElement("p");
  value.innerText = `Id: ${idTranfer} \n
  Valor: R$  ${novoValor}`;

  novaTransfer.innerHTML = "";
  novaTransfer.append(name, value);

  editForm.reset();

  saldoDaConta();
});

const deleteForm = document.querySelector("#deleteTransfer");
deleteForm.addEventListener("submit", async (ev) => {
  ev.preventDefault();

  const deleteid = document.querySelector("#idForDelete").value;

  await fetch(`http://localhost:3000/transfer/${deleteid}`, {
    method: "DELETE",
  });
  deleteForm.reset();
  fetchTranfers();
  saldoDaConta();
});

async function saldoDaConta() {
  let conta = 0;

  const transfers = await fetch("http://localhost:3000/transfer").then((res) =>
    res.json()
  );

  transfers.forEach((trans) => {
    if (trans.opcao === "positivo") {
      conta += Number(trans.value);
    } else if (trans.opcao === "negativo") {
      conta -= Number(trans.value);
    }
  });

  const saldo = document.querySelector("#saldo");
  saldo.innerText = conta;
}

fetchTranfers();
