const Character = require("./Character");

class Warrior extends Character {
  constructor(nome, health, atk, def, shield) {
    super(nome, health, atk, def);
    this.shield = shield;
    this.position = "ataque";
    this.posicao();
    this.def = this.def + this.shield;
  }
  atacar(alvo) {
    if (this.position === "ataque") {
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
    } else {
      console.log(
        `O guerreiro ${this.name} está em posição de defesa e não pode atacar`
      );
    }
  }
  changeposition() {
    if (this.position === "defesa") {
      this.position = "ataque";
      this.posicao();
    } else {
      this.position = "defesa";
      this.posicao();
    }
  }

  posicao() {
    if (this.position === "ataque") {
      this.def = this.def - this.shield;
    } else this.def = this.def + this.shield;
  }
}

jogador1 = new Warrior("Ramon", 100, 30, 10, 5);

jogador2 = new Character("Jose", 120, 15, 20);

jogador1.atacar(jogador2);
jogador2.atacar(jogador1);
console.log(jogador1);

jogador1.changeposition();
console.log(jogador1);
jogador2.atacar(jogador1);
jogador1.changeposition();
jogador2.atacar(jogador1);
