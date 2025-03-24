let option: number | boolean;

option = 2;

type Planet =
  | "Mercúrio"
  | "Vênus"
  | "Terra"
  | "Marte"
  | "Júpiter"
  | "Saturno"
  | "Urano"
  | "Netuno"
  | "Plutão";

let planet: Planet;
planet = "";
let homePlanet: Planet;

function checkPlanet(planet: Planet) {
  if (planet === "Terra") {
    console.log("Estamos na Terra");
  }
}

type GreetingCallback = (name: string) => void;

function greet(callbackfn: GreetingCallback) {
  let name = "Renan";

  callbackfn(name);
}
