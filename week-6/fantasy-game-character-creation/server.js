"use strict";

// server.js 
// This is a simple HTTP server that handles character creation and confirmation.

const http = require('http');
const url = require('url');
let createdCharacter = null; // Store the created character
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const method = req.method;
    console.log(`Received ${method} request at ${path}`); //for debug


    // Set default response headers
    res.setHeader('Content-Type', 'application/json');
    // Route handling
    if (path === '/character' && method === 'POST') {
        handleCreateCharacter(req, res, parsedUrl.query);
    } else if (path === '/character/confirm' && method === 'POST') {
        handleConfirmCharacter(req, res);
    } else if (path === '/character' && method === 'GET') {
        handleGetCharacter(req, res);
    } else {
        // Handle 404 - Route Not Found
        res.writeHead(404);
        res.end(JSON.stringify({ error: 'Route Not Found' }));
    }
});

 // Store the character data.
 createdCharacter = {
  class: characterClass,
  gender: gender,
  funFact: funFact,
};
res.writeHead(200);
res.end(JSON.stringify({ message: 'Character created successfully', character: createdCharacter }));

function handleConfirmCharacter(req, res) {
// 4.b. POST route for confirming the character creation.
if (!createdCharacter) {
  res.writeHead(400);
  res.end(JSON.stringify({ error: 'No character to confirm.  Please create a character first.' }));
  return;
}
const confirmedCharacter = { ...createdCharacter, confirmed: true };
createdCharacter = confirmedCharacter; //update
res.writeHead(200);
res.end(JSON.stringify({ message: 'Character confirmed!', character: confirmedCharacter }));
}

function handleGetCharacter(req, res) {
    // 4.c. A GET route for viewing the character. This must be the same character that was created in step 4.a.
    if (!createdCharacter) {
        res.writeHead(404);
        res.end(JSON.stringify({ error: 'No character found.  Create a character first.' }));
        return;
    }
    res.writeHead(200);
    res.end(JSON.stringify({ character: createdCharacter }));
}
const port = 3000;
server.listen(port, () => {
console.log(`Server running at http://localhost:${port}/`);
});

