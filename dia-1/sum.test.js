const sum = require('./sum');

describe('teste se a função retorna a soma dos numeros passados por parametro', () => {
  it('testa se a função é realmente uma função', () => {
    expect(typeof sum).toEqual('function');
  });

  it('testa se a função tem um retorno', () => {
    expect(sum).toBeDefined();
  });

  it('Retorna 9 se for passado por parametro 4 e 5', () => {
    expect(sum(4,5)).toBe(9);
  });

  it('Retorna 0 se for passado por parametro os numeros 0 e 0', () => {
    expect(sum(0,0)).toBe(0);
  });

  it('Retorna um erro caso o segundo parametro seja um valor não esperado', () => {
    expect(() => {
      sum(4,'5');
    }).toThrow();
  });

  it('Retorna um erro caso o segundo parametro seja um valor não esperado', () => {
    expect(() => {
      sum('4',5);
    }).toThrow();
  });

});