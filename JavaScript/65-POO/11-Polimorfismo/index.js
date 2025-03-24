class Vehicle {
  move() {
    console.log("O veículo está se movendo.");
  }
}

class Car extends Vehicle {
  move() {
    console.log("O carro está se movendo.");
  }
}

class Ship extends Vehicle {
  move() {
    console.log("O barco está se navegando.");
  }
}

class Aircraft extends Vehicle {
  move(speed) {
    console.log(`A aeronave está voando a ${speed} km/h.`);
  }
}

const delorean = new Car();
const blackPearl = new Ship();
const epoch = new Aircraft();

// delorean.move();
// blackPearl.move();
// epoch.move(80);

function start(...vehicle) {
  vehicle.forEach((unidade) => {
    console.log("Iniciando um veículo...");
    unidade.move();
  });
}

// start(delorean);
// start(blackPearl);
start(epoch, blackPearl, delorean);
