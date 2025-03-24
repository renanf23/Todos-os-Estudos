let allSpaceShips = [];
function interativemenu() {
    let option = Number(prompt(`Missão universo!!!\n
    Digite uma opção uma opção:\n
    1- Criar Nave
    2- Adicionar tripulante
  `));
    switch (option) {
        case 1:
            const spaceshipName = prompt("Insira o nome da  nave a ser enviada:");
            const spaceshipPilot = prompt("Insira o nome do piloto da nave:");
            const crewLimit = Number(prompt("Insira a quantidade maxima da tripulação"));
            const nave = createSpaceship(spaceshipName, spaceshipPilot, crewLimit);
            allSpaceShips.push(nave);
            interativemenu();
            break;
        case 2:
            const shipName = prompt("Digite o nome da nave que você deseja adiconar o tripulante:");
            const spaceship = findsapaceShip(shipName);
            if (spaceship) {
                alert(`encntrou ${spaceship.name}`);
            }
            const crewName = prompt("Digite o nome do novo tripulante:");
            console.log(spaceship);
            newCrew(crewName, spaceship);
        default:
            break;
    }
}
function createSpaceship(name, pilot, crewLimit) {
    let spaceship = {
        name,
        pilot,
        crewLimit,
        inMission: false,
        crew: [],
    };
    return spaceship;
}
function findsapaceShip(shipName) {
    let ship;
    ship = allSpaceShips.find((ship) => shipName == ship.name);
    return ship;
}
function newCrew(crewName, spaceShip) {
    if (spaceShip.crewLimit < spaceShip.crew.length) {
        alert("Erro: tripulação lotada!");
        interativemenu();
    }
    else {
        console.log("Foi");
    }
}
interativemenu();
