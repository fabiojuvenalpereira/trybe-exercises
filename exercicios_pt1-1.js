const assert = require('assert');
const { access } = require('fs');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

assert.deepStrictEqual(sum(4,5), 9, 'o resultado da soma de 5 + 4 = 9');
assert.deepStrictEqual(sum(0,0), 0, 'o resultado da soma de 0 + 0 = 0');