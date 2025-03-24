const Character = require("./Character");

class Mage extends Character {
  constructor(nome, health, atk, def, magic) {
    super(nome, health, atk, def);
    this.magic = magic;
  }

  atacar(alvo) {
    console.log(
      `-------------------------------------------------------------------------`
    );
    const dano = this.atk + this.magic - alvo.def;

    console.log(`${this.name} atacou ${alvo.name} e causou ${dano} de dano`);

    alvo.health = alvo.health - dano;

    console.log(`${alvo.name} possui ${alvo.health} pontos de vida`);
    console.log(
      `-------------------------------------------------------------------------`
    );
  }

  curar(alvo) {
    console.log(
      `-------------------------------------------------------------------------`
    );
    const cura = this.magic * 2;

    console.log(`${this.name} curou ${alvo.name} em ${cura} pontos de vida`);

    alvo.health = alvo.health + cura;
    console.log(`${alvo.name} possui ${alvo.health} pontos de vida`);
    console.log(
      `-------------------------------------------------------------------------`
    );
  }
}

module.exports = Mage;

// jogador1 = new Mage("Ramon", 100, 30, 10, 5);

// jogador2 = new Character("Jose", 120, 15, 20);

// jogador1.atacar(jogador2);
// jogador2.atacar(jogador1);
// jogador1.curar(jogador1);
