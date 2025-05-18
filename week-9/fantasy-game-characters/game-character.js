// game-characters.js
const { spawn } = require("child_process");
const { join } = require("path");
const { readFile } = require("fs").promises;
const { writeFile } = require("fs").promises;
const { write } = require("fs");

const { spawnSync } = require("child_process");

class gameCharactersData {
  answerQuestion(question, answer) {
    const childProc = spawnSync("node", ["src/game-characters-data.js"], {
      input: JSON.stringify({ question, answer }),
      encoding: "utf-8"
    });

    if (childProc.error) {
      throw childProc.error;
    }

    const result = childProc.stdout.toString();

    return result.trim() === "Correct!";
  }
}

class GameCharacters {
  constructor() {
    // TODO: Set the script file path
    this.scriptPath = "./src/game-characters-data.js";
    this.process = null;
    this.output = "";
    this.error = "";
    this.isRunning = false;
  }

  getCharacters(callback) {
    // TODO: Implement this method
    if (this.isRunning) {
      return callback(new Error("Script is already running"));
    }
    this.isRunning = true;
    this.process = spawn("node", [this.scriptPath]);
    this.process.stdout.on("data", (data) => {
      this.output += data.toString();
    });
    this.process.stderr.on("data", (data) => {
      this.error += data.toString();
    });
    this.process.on("close", (code) => {
      this.isRunning = false;
      if (code !== 0) {
        return callback(new Error(this.error));
      }
      try {
        const characters = JSON.parse(this.output);
        callback(null, characters);
      } catch (err) {
        callback(err);
      }
    }); 
  }
}

module.exports = { GameCharacters };
