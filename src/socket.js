const WebSocketServer = require('websocket').server;

let connection;

const configureWebSockets = httpServer => {
  const wsServer = new WebSocketServer({ httpServer });

  wsServer.on('request', function(request) {
    connection = request.accept(null, request.origin);
    console.log('accepted connection');

    connection.on('close', function() {
      console.log('closing connection');
      connection = null;
    });
  });
};

const send = message => {
  if (!connection) {
    console.log('no WebSocket connection');
    return;
  }
  connection.sendUTF(JSON.stringify(message));
};

module.exports = { configureWebSockets, send };
