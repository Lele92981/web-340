//adding the note assert library

const assert = require('assert');
const calculateDistance = require('../src/distance-calculator');

function testFunctionDescription() {
  // TODO: Implement this function
//testing a function that calculates the distance between planet1 and planet2
function testFunctionDescription() {
  const planet1 = { name: 'Earth', distanceFromSun: 149.6e6 }; // in kilometers
  const planet2 = { name: 'Mars', distanceFromSun: 227.9e6 }; // in kilometers

  const expectedDistance = Math.abs(planet1.distanceFromSun - planet2.distanceFromSun);
  const actualDistance = calculateDistance(planet1, planet2);

  assert.strictEqual(actualDistance, expectedDistance, `Expected ${expectedDistance} but got ${actualDistance}`);
}
console.log('Test passed!');
  const planet1 = { name: 'Earth', distanceFromSun: 149.6e6 }; // in kilometers
  const planet2 = { name: 'Mars', distanceFromSun: 227.9e6 }; // in kilometers

  const expectedDistance = Math.abs(planet1.distanceFromSun - planet2.distanceFromSun);
  const actualDistance = calculateDistance(planet1, planet2);

  assert.strictEqual(actualDistance, expectedDistance, `Expected ${expectedDistance} but got ${actualDistance}`);
  console.log('Test passed!');
}

return planet1, planet2, expectedDistance, actualDistance;
}



// Call your test functions here
function testEarthtoMars() {
  const planet1 = { name: 'Earth', distanceFromSun: 149.6e6 }; // in kilometers
  const planet2 = { name: 'Mars', distanceFromSun: 227.9e6 }; // in kilometers

  const expectedDistance = Math.abs(planet1.distanceFromSun - planet2.distanceFromSun);
  const actualDistance = calculateDistance(planet1, planet2);

  assert.strictEqual(actualDistance, expectedDistance, `Expected ${expectedDistance} but got ${actualDistance}`);
}
function testMarsToEarth() {
  const planet1 = { name: 'Mars', distanceFromSun: 227.9e6 }; // in kilometers
  const planet2 = { name: 'Earth', distanceFromSun: 149.6e6 }; // in kilometers

  const expectedDistance = Math.abs(planet1.distanceFromSun - planet2.distanceFromSun);
  const actualDistance = calculateDistance(planet1, planet2);

  assert.strictEqual(actualDistance, expectedDistance, `Expected ${expectedDistance} but got ${actualDistance}`);
}
// Call your test functions here
function testEarttoMars(){
  const planet1 = { name: 'Earth', distanceFromSun: 149.6e6 }; // in kilometers
  const planet2 = { name: 'Mars', distanceFromSun: 227.9e6 }; // in kilometers

  const expectedDistance = Math.abs(planet1.distanceFromSun - planet2.distanceFromSun);
  const actualDistance = calculateDistance(planet1, planet2);

  assert.strictEqual(actualDistance, expectedDistance, `Expected ${expectedDistance} but got ${actualDistance}`);
}

// Call your test functions here
function testMarsToEarth() {
  const planet1 = { name: 'Mars', distanceFromSun: 227.9e6 }; // in kilometers
  const planet2 = { name: 'Earth', distanceFromSun: 149.6e6 }; // in kilometers
  const expectedDistance = Math.abs(planet1.distanceFromSun - planet2.distanceFromSun);
  const actualDistance = calculateDistance(planet1, planet2);
  assert.strictEqual(actualDistance, expectedDistance, `Expected ${expectedDistance} but got ${actualDistance}`);
  console.log('Test passed!');
}

function testEarthToMars() {
  try{
    assert.strictEqual(actualDistance, expectedDistance, `Expected ${expectedDistance} but got ${actualDistance}`);
    console.log('Test passed!');
  }
  catch (error) {
    console.error('Failed testEarthToMars:(', error);
  }
  
