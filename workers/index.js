if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const queue = require('../lib/queue');
const handleIncoming = require('./incoming');

queue.receive('incoming', handleIncoming).catch(console.error);
