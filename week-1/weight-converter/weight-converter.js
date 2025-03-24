/**
 * Author: Leah Thames 
 * Date: 3/23/25
 * File Name: web-340/week-1/weight-converter/weight-converter.js
 * Description: This is the weight converter file for the week 1 assignment
*/

"use strict";   // Use strict mode  

// TODO: Implement the weight conversion logic here

// function to convert pounds to kilograms

// file: weight-converter.js
function convertPoundsToKilograms(pounds) {
    return pounds * 0.45;
    const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout
    });
}

// get user input
readline.question("Enter the weight in pounds: ", pounds => {
    console.log(`The weight in kilograms is: ${convertPoundsToKilograms(pounds)}`);
    readline.close();
});

// export the function
module.exports = convertPoundsToKilograms;

// end program

// Output

// Enter the weight in pounds: 10
// The weight in kilograms is: 4.5
// End program

// Expected Output
// Test passed.
// End program

// End program





