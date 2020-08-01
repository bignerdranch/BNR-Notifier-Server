const db = require('../models');
const { Message } = db;

const create = attrs => Message.create(attrs);

const list = () =>
  Message.findAll().then(messages => messages.slice().reverse());

module.exports = { create, list };
