/**
 * Author: Leah Thames
 * Date: 4/12/25
 * File Name:  index.js
 * Description:
 */

"use strict";

const readline = require("readline");
const TacoStandEmitter = require("./tacoStand");

const tacoStand = new TacoStandEmitter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// TODO: Set up event listeners for the tacoStand object
rl.on("line", (input) => {
  const [command, ...args] = input.split(" ");

  // TODO: Handle the commands
});

console.log(`Enter a command: "serve", "prepare", or "rush", followed by a space and the argument.`);
