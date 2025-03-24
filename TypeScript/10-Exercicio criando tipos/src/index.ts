let planets = [];
type Situation = "Habitado" | "Habitável" | "Inabitável" | "Inexplorado";

function firstMenuOption() {
  const planetName = prompt("Insira o nome do planeta:");
  const planetVerify = findPlanet(planetName);
  if (planetVerify) {
    alert(
      `Esse planeta já existe, por favor use um nome de planeta diferente.`
    );
  } else {
    let cord = [];
    for (let i = 0; i < 4; i++) {
      const number = Number(prompt(`Escolha a coordenada ${i + 1}`));
      cord.push(number);
    }
    console.log(cord);
    createPlanet(planetName, cord, "Inexplorado");
  }
}

function createPlanet(name: string, coords: number[], situation: Situation) {
  const planet = {
    name,
    coords,
    situation,
    satelites: [],
  };

  planets.push(planet);
}

createPlanet("Terra", [12, 24, 16, 80], "Habitado");

function findPlanet(name: string) {
  let planetName: {
    name: string;
    coords: number[];
    situation: Situation;
    satelites: string[];
  };
  console.log(name);
  planetName = planets.find((planet) => planet.name === name);
  console.log(planetName);
  return planetName;
}

function situationatt(planet: {
  name: string;
  coords: number[];
  situation: Situation;
  satelites: string[];
}) {
  const option = Number(
    prompt(
      `A situação atual do planeta ${planet.name} é ${planet.situation}\nPara mudar digite : 1 - Habitado\n 2 - Habitável\n 3 - Inabitável\n 4 - Inexplorado`
    )
  );

  if (option == 1) {
    planet.situation = "Habitado";
    alert(
      `A situação do planeta ${planet.name} mudou para ${planet.situation}`
    );
  } else if (option == 2) {
    planet.situation = "Habitável";
    alert(
      `A situação do planeta ${planet.name} mudou para ${planet.situation}`
    );
  } else if (option == 3) {
    planet.situation = "Inabitável";
    alert(
      `A situação do planeta ${planet.name} mudou para ${planet.situation}`
    );
  } else if (option == 4) {
    planet.situation = "Inexplorado";
    alert(
      `A situação do planeta ${planet.name} mudou para ${planet.situation}`
    );
  }
}

function secondMenuOption() {
  const planetName = prompt(
    "Insira o nome do planeta que deseja atualizar a situação:"
  );
  const planetVerify = findPlanet(planetName);

  if (planetVerify) {
    situationatt(planetVerify);
  } else {
    alert(`O planeta ${planetName} não existe`);
  }
}

function addsatellite(planet: {
  name: string;
  coords: number[];
  situation: Situation;
  satelites: string[];
}) {
  const satellite = prompt(`Digite o nome do satélite:`);
  planet.satelites.push(satellite);
  alert(`O  satelite ${satellite} foi adicionado ao planeta ${planet.name}`);
  console.log(planet);
}
function thirdMenuOption() {
  const planetName = prompt(
    "Insira o nome do planeta que deseja adicionar um satélite:"
  );
  const planetVerify = findPlanet(planetName);

  if (planetVerify) {
    addsatellite(planetVerify);
  } else {
    alert(`O planeta ${planetName} não existe`);
  }
}
function removesatellite(planet: {
  name: string;
  coords: number[];
  situation: Situation;
  satelites: string[];
}) {
  const satellite = prompt(`Digite o nome do satélite que deseja remover:`);
  const index = planet.satelites.indexOf(satellite);
  if (index !== -1) {
    planet.satelites.splice(index, 1);
  } else {
    alert(`O satelite ${satellite} não existe para o planeta ${planet.name}`);
  }
  console.log(planet);
}

function fourthMenuOption() {
  const planetName = prompt(
    "Insira o nome do planeta que deseja adicionar um satélite:"
  );
  const planetVerify = findPlanet(planetName);

  if (planetVerify) {
    removesatellite(planetVerify);
  } else {
    alert(`O planeta ${planetName} não existe`);
  }
}
function planetsList() {
  let list = `Planetas registrados:`;
  planets.forEach(
    (planet: {
      name: string;
      coords: [number, number, number, number];
      situation: Situation;
      satelites: string[];
    }) => {
      list += `\n
      Planeta: ${planet.name}
      Coordenadas: ${planet.coords}
      Situação: ${planet.situation}
      Satelites: ${planet.satelites}  `;
    }
  );
  alert(list);
}

let UserOption = 0;
while (UserOption !== 6) {
  const menu = `Painel Principal
  1 - Criar planeta
  2 - Atualizar situação de planeta
  3 - Adicionar satélite a um planeta
  4 - Remover satélite de um planeta
  5 - Listar planetas
  6 - Encerrar`;

  UserOption = Number(prompt(menu));

  switch (UserOption) {
    case 1:
      firstMenuOption();
      break;

    case 2:
      secondMenuOption();
      break;

    case 3:
      thirdMenuOption();
      break;

    case 4:
      fourthMenuOption();

    case 5:
      planetsList();
    default:
      break;
  }
}
