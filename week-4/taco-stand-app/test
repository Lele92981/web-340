/**
 * Author:Leah Thanes
 * Date: 4/12/25
 * File Name: taco-stand.js
 * Description:
 */

const EventEmitter = require("events");

// TODO: Create a TacoStandEmitter class that extends EventEmitter and implements the following methods: serveCustomer, prepareTaco, and handleRush
class TacoStandEmitter extends EventEmitter {
  constructor() {
    super();
    this.customers = [];
    this.tacos = [];
    this.rush = false;
  }

  serveCustomer(customer) {
    this.customers.push(customer);
    this.emit("customerServed", customer);
  }

  prepareTaco(taco) {
    this.tacos.push(taco);
    this.emit("tacoPrepared", taco);
  }

  handleRush(rush) {
    this.rush = rush;
    this.emit("rushHandled", rush);
  }
}
