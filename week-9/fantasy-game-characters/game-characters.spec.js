// game-characters.spec.js
const { GameCharacters } = require("../src/game-characters");

describe("GameCharacters", () => {
  let gameCharacters;

  beforeEach(() => {
    gameCharacters = new GameCharacters();
  });


  test("should return game characters data", (done) => {
    // TODO: Implement this test
    gameCharacters.getCharacters((err, characters) => {
      if (err) {
        return done(err);
      }
      expect(characters).toBeInstanceOf(Array);
      expect(characters.length).toBeGreaterThan(0);
        done();
      });
    });

  test("should return game characters data with correct properties", (done) => {


// Test cases for the gameCharacter array
const testCases = [
  {
      input: gameCharacter,
      expected: "Array",
  },
  {
      input: gameCharacter[0],
      expected: "Warrior",
  },
  {
      input: gameCharacter[1],
      expected: "Mage",
  },
  {
      input: gameCharacter[2],
      expected: "Rogue",
  },
];      

// Function to run test cases
function runTests() {
  testCases.forEach((testCase, index) => {
      const result = typeof testCase.input === testCase.expected;
      console.log(`Test case ${index + 1}: ${result ? "Passed" : "Failed"}`);
  });
}
runTests();
  });

  test("should handle an error when the game characters data script is not found", (done) => {
    // TODO: Implement this test
    gameCharacters.scriptPath = "./invalid-path.js";
    gameCharacters.getCharacters((data, err) => {
      expect(err).toBeNull();
      expect(err.message).not.toBeNull();
      done();
    });
  }
    );
  
  });

  test("should handle an error when the game characters data script fails", (done) => {
    // TODO: Implement this test
    gameCharacters.scriptPath = "./src/failing-script.js"; // Assuming this script fails
    gameCharacters.getCharacters((err) => {
      expect(err).toBeInstanceOf(Error);
      expect(err.message).toMatch(/Error reading file:/);
      done();
    });
  }
  );
