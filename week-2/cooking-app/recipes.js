/**
 * Author: Leah Thames
 * Date: 3/30/25
 * File Name: recipes.js
 * Description: module for the cooking app
*/

const { exit } = require('process');
const readline = require('readline');
import { createInterface } from 'readline';

// Define the createRecipe function
function createRecipe(ingredient) {
  // TODO: Implement this function
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });
  
  }


  //prompt user for recipe name
  rl.question("Recipe created with ingredient: ", function(ingredient1, ingredient2) {
    console.log(`You entered: ${ingredient1, ingredient2}`);

    rl.close();
  });



// Define the setTimer function
const setTimerLib = require('set-timer');
setTimerLib(minutes, function() {
  console.log('Timer done!');
});

// Define the quit function
function quit() {
  // TODO: Implement this function
  exit(0); // Exit the program with a success code

}



// TODO: Export the functions
module.exports = {
  quit,
  setTimer: setTimerLib,
  setTimer,
  quit

};



