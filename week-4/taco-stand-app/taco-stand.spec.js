/**
 * Author: Leah Thames
 * Date: 4/12/25
 * File Name: taco-stand.spec.js
 * Description:
 */

"use strict";

const assert = require("assert");
const TacoStandEmitter = require("../src/tacoStand");
const tacoStand = new TacoStandEmitter();

// TODO: Write tests for the TacoStandEmitter methods

function testFunctions() {
    const functions = [
        "serveCustomer",
        "prepareTaco",
        "handleRush"
    ];
    
    functions.forEach((func) => {
        assert.strictEqual(typeof tacoStand[func], "function", `${func} should be a function`);
    });
    }
testFunctions();

function testPerformAction() {
    try {
        // register an event listener for the `action` event
        // call the perform action method
        console.log('Passed testPerformAction");
            return true;
    } catch (err) {
            console.error("Failed testPerformAction");
            return false;

    }
function serveCustomer() {
  const customer = "John Doe";
  tacoStand.serveCustomer(customer);
  assert.strictEqual(tacoStand.customers[0], customer, "Customer should be served");
    EventEmitter.on('error', (error) => {
        console.error("Error:", error);
    });

}
function prepareTaco() {
  const taco = "beef";
  tacoStand.prepareTaco(taco);
  assert.strictEqual(tacoStand.tacos[0], taco, "Taco should be prepared");
  EventEmitter.on('error', (error) => {
    console.error("Error:", error);
  }
    );
}
function handleRush() {
  const rush = "rush";
  tacoStand.handleRush(rush);
  assert.strictEqual(tacoStand.rush, true, "Rush should be handled");
    EventEmitter.on('error', (error) => {
        console.error("Error:", error);
    }
        );
}

function testTacoStand() {
    try {
        serveCustomer();
        prepareTaco();
        handleRush();
        console.log("All tests passed!");
    } catch (error) {
        console.error("Test failed:", error);
    }
}
function testPrepareTaco() {
    try {
        prepareTaco();
        console.log("All tests passed!");
    } catch (error) {
        console.error("Test failed:", error);
    }
}   
function testHandleRush() {
    try {
        handleRush();
        console.log("All tests passed!");
    } catch (error) {
        console.error("Test failed:", error);
    }
}

module.exports = {
    serveCustomer,
    prepareTaco,
    handleRush
    };
