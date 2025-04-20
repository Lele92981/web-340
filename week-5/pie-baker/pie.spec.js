/**
 * Author: Leah Thames
 * Date: 4/18/25
 * File Name: pie.spec.js
 * Description: pie baker test file
 */


"use strict";
const { bakePie } = require("../src/pie");
describe('bakePie', () => {
  it("should bake an apple pie with no extra ingredients", () => {
    const result = bakePie("apple", []);
    expect(result).toEqual({ type: "apple", ingredients: [], status: "baking" });
  });
  
  it("should bake a cherry pie with specific ingredients", () => {
    const ingredients = ["cherries", "sugar", "flour"];
    const result = bakePie("cherry", ingredients);
    expect(result).toEqual({
      type: "cherry",
      ingredients: ["cherries", "sugar", "flour"],
      status: "baking",
    });
  });

  it("should bake a pie even if no type is provided", () => {
    const ingredients = ["pumpkin", "spices"];
    const result = bakePie("", ingredients);
    expect(result).toEqual({
      type: "",
      ingredients: ["pumpkin", "spices"],
      status: "baking",
    });
  });
  
  it("should bake a blueberry pie when ingredients are not specified", () => {
    const result = bakePie("blueberry", undefined);
    expect(result).toEqual({
      type: "blueberry",
      ingredients: undefined,
      status: "baking",
    });
  });
});
