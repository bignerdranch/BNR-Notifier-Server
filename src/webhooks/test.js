const handler = require('./handler');

const webhookRoute = (req, res) => {
  const message = {
    text: req.body,
  };
  handler(message)
    .then(() => {
      res.end('Received ' + JSON.stringify(message));
    })
    .catch(e => {
      console.error(e);
      res.status(500);
      res.end(e.message);
    });
};

module.exports = webhookRoute;
