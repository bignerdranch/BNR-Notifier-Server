if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const http = require('http');
const express = require('express');
const webhookRouter = require('./webhooks');
const listRouter = require('./list');
const configureWebSockets = require('./socket');

const app = express();

app.use('/webhooks', webhookRouter);
app.use('/list', listRouter);

const server = http.createServer(app);
configureWebSockets(server);

const { PORT = 3000 } = process.env;
server.listen(PORT);
console.log(`listening on port ${PORT}`);
