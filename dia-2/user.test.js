const getUserName = require('./user');

describe('Testa se a função getUserName retorna o resultado esperado', () => {
  it('Verifica se getUserName é uma função', (done) => {
    expect.assertions(1);
    expect(typeof (getUserName)).toBe('function');
    done();
  });
});

describe('testes Utilizando resolve e rejects', () => {
  it('Passando o parametro 4 espera o retorno Mark', () => {
    expect.assertions(1);
    return expect(getUserName(4)).resolves.toBe('Mark');
  });

  it('Passando 6 como parametro espera o retorno do erro', () => {
    expect.assertions(1);
    expect(getUserName(6)).rejects.toThrowError();
  })
})

describe('testes realizando async e await', () => {
  
  it('passando 5 como parametro espera se o resultado Paul', async () => {
    await expect(getUserName(5)).resolves.toBe('Paul');
  });
  
  it('passando o parametro 6 devera retornar um erro', async () => {
    await expect(getUserName(6)).rejects.toEqual({ error: 'User with 6 not found.' });
  });

});
