const http = require('http');
const express = require('express');

const app = express();

const server = http.createServer(app);

const { PORT = 3000 } = process.env;
server.listen(PORT);
console.log(`listening on port ${PORT}`);
