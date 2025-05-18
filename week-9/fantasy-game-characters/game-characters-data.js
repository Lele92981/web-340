// TODO: Implement this script
"use strict";
// This script should export an array of objects representing game characters.

const { writeFile } = require("fs").promises;
const { write } = require("fs");
const { join } = require("path");
const filePath = join(__dirname, "game-characters-data.json");

const gameCharacter = [
    "Warrior",
    "Mage",
    "Rogue",
    "Fireball",
    "Telepathic",
    "Stealth",
    "Male",
    "Female",
    "other",
];

const data = JSON.stringify(gameCharacter, null, 2);

writeFile(file, data, "utf8", (err) => {
    if (err) {
        console.error("Error writing file:", err);
    } else {
        console.log("File written successfully");
    }
}
);

const { readFile } = require("fs").promises;

async function readData() {
    try {
        const data = await readFile(filePath, "utf8");
        console.log("File read successfully");
        return JSON.parse(data);
    } catch (err) {
        console.error("Error reading file:", err);
    }
}
readData()



// Export the gameCharacter array
module.exports = gameCharacter;


