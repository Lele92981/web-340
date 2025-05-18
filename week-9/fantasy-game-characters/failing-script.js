// TODO: Implement this script
const { gameCharacter } = require("../src/game-characters-data");
 
describe("GameCharacters", () => {
    let gameCharacters;
    
    beforeEach(() => {
        gameCharacters = new GameCharacters();
    });
    
    test("should return game characters data", (done) => {
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
        gameCharacters.getCharacters((err, characters) => {
        if (err) {
            return done(err);
        }
        expect(characters[0]).toHaveProperty("name");
        expect(characters[0]).toHaveProperty("class");
        expect(characters[0]).toHaveProperty("level");
        done();
        });
    });
    
    test("should handle an error when the game characters data script is not found", (done) => {
        gameCharacters.scriptPath = "./invalid-path.js";
        gameCharacters.getCharacters((err) => {
        expect(err).toBeInstanceOf(Error);
        done();
        });
    });
    }
);
test("should handle an error when the game characters data script throws an error", (done) => {
    gameCharacters.scriptPath = "./src/game-characters-data.js";
    gameCharacters.getCharacters((err) => {
        expect(err).toBeInstanceOf(Error);
        done();
    });
}
);

const { spawn } = require("child_process");

const child = spawn("node", ["src/failing-script.js"]);
child.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
});
child.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
});

child.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
}
);


