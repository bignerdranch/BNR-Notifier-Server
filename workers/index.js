if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const queue = require('../lib/queue');
const handleIncoming = require('./incoming');
const handlePush = require('./push');

queue.receive('incoming', handleIncoming).catch(console.error);
queue.receive('push', handlePush).catch(console.error);
