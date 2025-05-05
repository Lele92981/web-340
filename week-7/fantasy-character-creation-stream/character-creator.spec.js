const { PassThrough } = require('stream');
const CharacterCreator = require('../src/character-creator'); // Corrected path

describe('CharacterCreator', () => {
  let characterCreator;
  let consumer;
  beforeEach(() => {
    characterCreator = new CharacterCreator({ maxLength: 3 });
    consumer = new PassThrough();
    characterCreator.pipe(consumer);
  });
  afterEach(() => {
    characterCreator.end();
  });

  test("should process data correctly when written to", (done) => {
    consumer.on('data', (data) => {
      const output = data.toString();
      expect(output).toBeDefined();
      expect(typeof output).toBe('string');
      done();
    });
    characterCreator.write('start');
  });

  test('should emit an "error" event when an empty string is written', (done) => { 
    consumer.on('error', (error) => {
      expect(error).toBeDefined();
      done();
    });
    characterCreator.write('');
  });
  
  test("should transforms the data correctly when written to", (done) => {
    consumer.on('data', (data) => {
      const output = data.toString();
      expect(output).toBeDefined();
      expect(typeof output).toBe('string');
      done();
    });
    characterCreator.write('start');
  });
  
});
