if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const queue = require('../lib/queue');
const repo = require('../lib/repo');

const handleIncoming = message =>
  repo.create(message).then(record => {
    console.log('Saved ' + JSON.stringify(record));
    return queue.send('socket', record);
  });

queue.receive('incoming', handleIncoming).catch(console.error);
