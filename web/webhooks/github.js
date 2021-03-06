const queue = require('../../lib/queue');

const actionsToNotify = ['opened', 'closed'];

const webhookRoute = (req, res) => {
  console.log(JSON.stringify(req.body));

  const {
    repository: { name: repoName },
    pull_request: { title: prTitle, html_url: prUrl },
    action,
  } = req.body;

  const message = {
    text: `PR ${action} for repo ${repoName}: ${prTitle}`,
    url: prUrl,
  };

  console.log(message);

  if (!actionsToNotify.includes(action)) {
    console.log(`${action} not included in ${actionsToNotify}; skipping`);
    return;
  }

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
