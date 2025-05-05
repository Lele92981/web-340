const { Duplex } = require('stream');



class CharacterCreator extends Duplex {
  constructor(options) {
    super(options);
    // TODO: Initialize your class here
    const CharacterClass = options.characterClass || 'warrior'; 'gender'; 'fun fact';
    this.characterClass = CharacterClass;
    let characterClassNames = {
      classes: ['Warrior', 'Mage', 'Rogue'],
      genders: ['Male', 'Female', 'Other'],
      funFacts: ['fun fact']
    };
    
    this.characterClass = characterClassName;
    this.characterClass = options.characterClass || 'Warrior';
    this.characterClass = options.characterClass || 'Mage';
    this.characterClass = options.characterClass || 'Rogue';
    this.characterClass = options.characterClass || 'gender';
    this.characterClass = options.characterClass || 'fun fact';
    this.ended = false;
    
  }

  _write(chunk, encoding, callback) {
    try {
      const chunkString = chunk.toString(encoding);
      console.log(`Received chunk: ${chunkString}`);
      callback();
    } catch (err) {
      callback(err);
    }

  }

  _read(size) {
    if (this.ended) return;
    let shouldContinue = true;
    while (shouldContinue) {
      let character;
      if (this.generationStrategy === 'random') {
        character = this.characterPool.charAt(Math.floor(Math.random() * this.characterPool.length));
      } else if (this.generationStrategy === 'sequential') {
        character = this.characterPool[this.currentLength % this.characterPool.length];
      } else {
        character = this.characterPool.charAt(Math.floor(Math.random() * this.characterPool.length));
      }

      this.currentLength++;
      this.buffer.push(character);
      if (this.maxLength && this.currentLength >= this.maxLength) {
        this.ended = true;
        this.push(this.prefix + this.buffer.join(''));
        this.push(null);
        shouldContinue = false;
      } else if (this.endingChar && character === this.endingChar) {
        this.ended = true;
        this.push(this.prefix + this.buffer.join(''));
        this.push(null);
        shouldContinue = false;
      }
      else if (size > 0 && this.buffer.length > 0) {
        this.push(this.prefix + this.buffer.join(''));
        this.buffer = [];
        shouldContinue = false;
      }
    }
  }
}

module.exports = CharacterCreator;
