const connect = require('./client');

/**
 * Establishes connection with the game server
 */

const setupInput = function() {
  stdin.on('data', handleUserInput);
  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;

};

const handleUserInput = function (data) {
  if (data === '\u0003') {
    process.exit();
  }

};
console.log('Connecting ...');
connect();

module.exports = {setupInput};