function sendSpaceship(spaceship: { pilot: string; copilot?: string }) {
  // ...
}

sendSpaceship({ pilot: "Han Solo", copilot: "Chewbacca" });
sendSpaceship({ pilot: "Luke" });

let input: unknown;
let age: any;

input = "Test";
input = 20;
input = [];

let text: string;

text = input;

text = age;

function verification(test) {
  if (test) {
  } else {
    let _check: never;

    let text = _check;

    text = "";

    return _check;
  }
}
