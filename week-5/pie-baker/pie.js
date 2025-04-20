"use strict";
function bakePie(pieType, ingredients) {
  // Your code here
  const pie = { type: pieType || null,
    ingredients: ingredients === undefined ? [] : ingredients, // Ensure ingredients is always an array
    status: "baking" };
  return pie;
}
module.exports = { bakePie }
