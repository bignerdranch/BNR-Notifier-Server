const queue = require('../queue');

const webhookRoute = (req, res) => {
  console.log(JSON.stringify(req.body));

  const { state, name, ssl_url: url } = req.body;

  const message = {
    text: `Deployment ${state} for site ${name}`,
    url,
  };

  console.log(message);
  queue
    .send('incoming', message)
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
