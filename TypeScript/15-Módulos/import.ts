import { Spaceship } from "./export";
import * as _ from "lodash";

interface BattleSpaceship extends Spaceship {
  weapons: number;
}

let xwing: BattleSpaceship = {
  name: "X-wing",
  pilot: "Luke Skywalker",
  speed: 50,
  weapons: 4,
};

console.log(_.camelCase(xwing.pilot));
console.log(_.kebabCase(xwing.pilot));
