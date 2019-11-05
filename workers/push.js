const expo = require('../lib/expo');

const handlePush = message => {
  console.log('handling push', message);
  return expo.push(message);
};

module.exports = handlePush;
