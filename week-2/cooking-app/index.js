/**
 * Author: Leah Thames
 * Date:3/30/25
 * File Name: index.js
 * Description: main file for the cooking app
*/

// TODO: Import your module using require
const readline = require('readline');     
const fs = require('fs');
const recipes = require('./recipes');
const { createInterface } = require('readline');
const { createRecipe, setTimer, quit } = require('./recipes');



// TODO: Implement your CLI program here
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//prompt user for input
rl.question("What would you like to do? ", function(answer) {
  if (answer === 'create') {
    createRecipe();
  } else if (answer === 'timer') {
    setTimer();
  } else if (answer === 'quit') {
    quit();
  } else {
    console.log('Invalid command');
  }
  rl.close();
}
);

//export the functions
module.exports = {
  createRecipe,
  setTimer,
  quit
};

//start the program
console.log('Welcome to the cooking app!');
console.log('Please enter one of the following commands: create, timer, or quit');

//end of program
console.log('Program exited');
//end of program


