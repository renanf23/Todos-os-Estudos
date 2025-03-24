"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var xwing = {
    name: "X-wing",
    pilot: "Luke Skywalker",
    speed: 50,
    weapons: 4,
};
console.log(_.camelCase(xwing.pilot));
console.log(_.kebabCase(xwing.pilot));
