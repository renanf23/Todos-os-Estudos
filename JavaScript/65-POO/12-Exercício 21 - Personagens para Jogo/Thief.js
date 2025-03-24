const Character = require("./Character");

class Thief extends Character {
  constructor(nome, health, atk, def) {
    super(nome, health, atk, def);
  }

  atacar(alvo) {
    console.log(
      `-------------------------------------------------------------------------`
    );
    const dano = (this.atk - alvo.def) * 2;

    console.log(`${this.name} atacou ${alvo.name} e causou ${dano} de dano`);

    alvo.health = alvo.health - dano;

    console.log(`${alvo.name} possui ${alvo.health} pontos de vida`);
    console.log(
      `-------------------------------------------------------------------------`
    );
  }
}

module.exports = Thief;
// jogador1 = new Thief("Ramon", 100, 30, 10);

// jogador2 = new Character("Jose", 120, 15, 20);

// jogador1.atacar(jogador2);
// jogador2.atacar(jogador1);
