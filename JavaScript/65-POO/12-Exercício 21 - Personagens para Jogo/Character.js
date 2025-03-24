class Character {
  constructor(nome, health, atk, def) {
    this.name = nome;
    this.health = health;
    this.atk = atk;
    this.def = def;
  }
  atacar(alvo) {
    console.log(
      `-------------------------------------------------------------------------`
    );
    const dano = this.atk - alvo.def;

    console.log(`${this.name} atacou ${alvo.name} e causou ${dano} de dano`);

    alvo.health = alvo.health - dano;

    console.log(`${alvo.name} possui ${alvo.health} pontos de vida`);
    console.log(
      `-------------------------------------------------------------------------`
    );
  }
}

module.exports = Character;

// jogador1 = new Character("Ramon", 100, 30, 10);

// jogador2 = new Character("Jose", 120, 15, 20);

// jogador1.atacar(jogador2);
// jogador2.atacar(jogador1);
