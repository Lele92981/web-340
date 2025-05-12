"use strict";

const { readFile, read } = require('fs');
const { join } = require('path');
const filePath = join(__dirname, 'characters.json');
// Removed redundant declaration of 'file'

readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  try {
    const characters = JSON.parse(data);
    console.log('Characters:', characters);
  } catch (parseErr) {
    console.error('Error parsing JSON:', err.message);
    return
  }
  console.log('Characters:', characters);
})

const { writeFile } = require('fs');
const characters = [
  { name: 'Hero', class: 'Warrior' },
  { name: 'Mage', class: 'Sorcerer' },
  { name: 'Rogue', class: 'Thief' },
  { gender: 'Male' },
  { gender: 'Female' },
  { gender: 'Other' }
];



const data = JSON.stringify(characters, null, 2);
writeFileSync(file, data, "utf8", (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('File written successfully');
});
  
const path = require('path');
const file = path.join(__dirname, 'characters.json');
const { writeFile } = require('fs').promises;
const { join } = require('path');

async function characterCreation() {
  try {
    const data = await fs.readFile(file, 'utf8');
    const characters = JSON.parse(data);
    console.log('Characters:', characters);
  } catch (err) {
    console.error('Error reading file:', err);
  }
}
 readFile();


describe('Character Creation', () => {
  it('should create a character', async () => {
    const character = { name: 'Hero', class: 'Warrior' };
    const result = await createCharacter(character);
    expect(result).toEqual({ success: true, character });
  });

  it('should get characters', async () => {
    const characters = await getCharacters();
    expect(characters).toBeInstanceOf(Array);
  });
});


async function createCharacter(character) {
  // TODO: Implement this function
  const { readFile } = require('fs').promises;
  const { join } = require('path');
 const filePath = join(__dirname, 'characters.json');

  async function readCharacterCreation() {
    try {
      const data = await readFile(filePath, 'utf8');
      const characters = JSON.parse(data);
      return characters;
    } catch (err) {
      console.error('Error reading file:', err);
      return [];
    }
  }


}

async function getCharacters() {
  // TODO: Implement this function
  const { readFile , writeFile } = require('fs').promises;
  const { join } = require('path');
  const filePath = join(__dirname, 'characters.json');

  async function readCharacterCreation() {
    try {
      const data = await readFile(filePath, 'utf8');
      const characters = JSON.parse(data);
      return characters;
    } catch (err) {
      console.error('Error reading file:', err);
      return [];
    }
  }
  
 async function writeCharacterCreation(data) {
    try {
      await writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
      console.log('File written successfully');
    } catch (err) {
      console.error('Error writing file:', err);
    }
  }
}
module.exports = { createCharacter, getCharacters }; 

