class Spaceship {
    _name;
    captain;
    speed;
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    constructor(name, captain) {
        this.name = name;
        this.captain = captain;
        this.speed = 0;
    }
    accelerate(rate, time) {
        this.speed = rate * time;
    }
}
class Figther extends Spaceship {
    weapons;
    constructor(name, captain, weapons) {
        super(name, captain);
        this.weapons = weapons;
    }
    shoot() {
        for (let i = 0; i < this.weapons; i++) {
            console.log("Pew!");
        }
    }
    erase() {
        this.captain = "";
        this.speed = 0;
    }
}
let ship = new Figther("Uss Enterprise", "James T Kirk", 10);
ship.accelerate(50, 10);
ship.weapons = 20;
ship.name = "X-Wing";
console.log(ship.name);
