const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, nome) => {
    return acc + nome.split('').reduce((acum,letter) => {
      if (letter === 'a' || letter === 'A') {
        return acum + 1;
      } 
    return acum;
  }, 0)}, 0);
}

assert.deepStrictEqual(containsA(), 20);