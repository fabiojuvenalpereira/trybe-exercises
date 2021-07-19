const upperCase = require('./toUperCase');

describe('Testa a função Que converte palavras para upperCase', () => {
  it('Testa se a função é uma função', () => {
    expect(typeof upperCase).toBe('function')
  });

  it('Testa se a função retorna o valor esperado', async () => {
    await upperCase('fabio', (result) => {
      expect(result).toBe('FABIO');
    })
  });

});