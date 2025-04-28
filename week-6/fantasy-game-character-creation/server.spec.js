const http = require('http');
function makeRequest(options, data) {
  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      let responseData = '';
        res.on('data', (chunk) => {
          responseData += chunk;
                
          res.on('end', () => {
            try {
              const parsedData = JSON.parse(responseData);
              resolve({ statusCode: res.statusCode, data: parsedData });
            } catch (error) {
              reject({ error, rawResponse: responseData, statusCode: res.statusCode });
            }
          });

          res.on('error', (error) => {
            reject(error);
          });
        });
    
          req.on('error', (error) => {
            reject(error);
          });
    
          if (data) {
            req.write(JSON.stringify(data));
          }
req.end();
    });
  });
}

describe('Character API', () => {
  let server;
    const port = 3000;
    const host = 'localhost';
    beforeAll((done) => {
      server = http.createServer((req, res) => {
        const { pathname, query } = url.parse(req.url, true);
        res.setHeader('Content-Type', 'application/json');
        if (req.method === 'POST' && pathname === '/character') {
          handleCreateCharacter(req, res, query);
        } else if (req.method === 'POST' && pathname === '/character/confirm') {
          handleConfirmCharacter(req, res);
        } else if (req.method === 'GET' && pathname === '/character') {
          handleGetCharacter(req, res);
        } else {
          sendError(res, 404, 'Not Found');
        }
      }).listen(port, () => {
        console.log(`Server started at http://${host}:${port}`);
        done();
      });
    });

    afterAll((done) => {
        server.close(done);
      });
      let createdCharacter;
        function handleCreateCharacter(req, res, query) {
            const characterClass = query.class;
            const gender = query.gender;
            const funFact = query.funFact;
            if (!characterClass || !gender || !funFact) {
                sendError(res, 400, 'Missing parameters');
                return;
            }
            if (!['Warrior', 'Mage', 'Rogue'].includes(characterClass) ||
                !['Male', 'Female', 'Other'].includes(gender)) {
                sendError(res, 400, 'Invalid parameters');
                return;
            }
            createdCharacter = { class: characterClass, gender, funFact };
            res.writeHead(200);
            res.end(JSON.stringify({ message: 'Character created', character: createdCharacter }));
        }

        function handleConfirmCharacter(req, res) {
        if (!createdCharacter) {
            sendError(res, 400, 'No character to confirm');
            return;
        }
        createdCharacter = { ...createdCharacter, confirmed: true };
        res.writeHead(200);
        res.end(JSON.stringify({ message: 'Character confirmed', character: createdCharacter }));
    }
    function handleGetCharacter(req, res) {
        if (!createdCharacter) {
            sendError(res, 404, 'No character found');
            return;
        }
        res.writeHead(200);
        res.end(JSON.stringify({ character: createdCharacter }));
    }
    function sendError(res, statusCode, message) {
        res.writeHead(statusCode);
        res.end(JSON.stringify({ error: message }));
    }
beforeEach(() => {
    createdCharacter = null;
  });
  describe('POST /character', () => {
    it('creates a character', async () => {
      const res = await makeRequest({
        host,
        port,
        path: '/character?class=Warrior&gender=Male&funFact=Test',
        method: 'POST',
      });
      expect(res.statusCode).toBe(200);
      expect(res.data.character.class).toBe('Warrior');
    });
    it('errors if no character', async () => {
        const res = await makeRequest({
          host,
          port,
          path: '/character/confirm',
          method: 'POST',
        });
        expect(res.statusCode).toBe(400);
        expect(res.data.error).toBe('No character to confirm');
      });
    });
    describe('GET /character', () => {
      it('gets character', async () => {
          await makeRequest({ //create first
              host,
              port,
              path: '/character?class=Warrior&gender=Male&funFact=Test',
              method: 'POST',
            });
        const res = await makeRequest({

          host,
          port,
          path: '/character',
          method: 'GET',
        });
        expect(res.statusCode).toBe(200);
        expect(res.data.character.class).toBe('Warrior');
      });

    it('errors on missing params', async () => {
      const res = await makeRequest({
        host,
        port,
        path: '/character?class=Warrior&gender=Male',
        method: 'POST',
      });
      expect(res.statusCode).toBe(400);
      expect(res.data.error).toBe('Missing parameters');
    });
    it('errors if no character', async () => {
        const res = await makeRequest({
          host,
          port,
          path: '/character',
          method: 'GET',
        });
                expect(res.statusCode).toBe(404);
                expect(res.data.error).toBe('No character found');
            });
        });
    describe('POST /character/confirm', () => {
        it('confirms character', async () => {
            await makeRequest({
                host,
                port,
                path: '/character?class=Warrior&gender=Male&funFact=Test',
                method: 'POST',
            });
            const res = await makeRequest({
                host,
                port,
                path: '/character/confirm',
                method: 'POST',
            });
            expect(res.statusCode).toBe(200);
            expect(res.data.character.confirmed).toBe(true);
                  expect(res.data.character.class).toBe('Warrior'); 
                });
          });
      }
  );
