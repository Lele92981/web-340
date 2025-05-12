"use strict";

const fs = require('fs').promises;
const path = require('path');
const filePath = path.join(__dirname, 'characters.json');
const { createCharacter, getCharacters } = require('../src/character-creation');
const { readFile, writeFile } = fs;
const { join } = path;


describe("Character Creation Module", () => {
  let createCharacter; {
 name : 'Hero', class: 'Warrior' };
  let getCharacters;
  let characterData = [
    { name: 'Hero', class: 'Warrior' },
    { name: 'Mage', class: 'Sorcerer' },
    { name: 'Rogue', class: 'Thief' }
  ];

  beforeEach(() => {
    jest.resetModules();
    // TODO: Set up your mocks here
    ({ createCharacter, getCharacters } = require('../src/character-creation'));
  });

  // TODO: Write your tests here. You should have at least three tests:
  test ('Character Creation', () => {
    const character = { name: 'Hero', class: 'Warrior' };
    const result = createCharacter(character);
    expect(result).toEqual({ success: true, character });
  });
  
  test("handles errors", () => {
    const character = { name: 'Hero', class: 'Warrior' };
    const result = createCharacter(character);
    expect(result).toEqual({ success: false, error: 'Error creating character' });
  });
  
  test("getCharacters", () => {
    const characters = getCharacters();
    expect(characters).toBeInstanceOf(Array);
    expect(characters.length).toBe(3);
    expect(characters).toEqual(characterData);
  });  
  
  
