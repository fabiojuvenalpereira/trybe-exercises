const { encode, decode } = require('./exercicio-pt-2');

describe('Teste para verificar se encode e decode são funções', () => {
  it('Realizando o teste para saber se encode é uma função',() => {
    expect.assertions(2);
      expect(encode).toBeDefined();
      expect(typeof encode).toBe('function');
  });

  it('Realizando o teste para saber se decode é uma fução',() => {
    expect.assertions(2);
      expect(encode).toBeDefined();
      expect(typeof encode).toBe('function');
  });

});

describe('Realiza os testes para saber se as vogais estão sendo codificadas da maneira correta na função encode', () => {
 it('Realizando o teste de cada vogal, esperando que todas sejam criptografadas. ', () => {
  expect.assertions(6);  
  expect(encode('a,e,i,o,u')).toBe('1,2,3,4,5');
  expect(encode('ala')).toBe('1l1');
  expect(encode('ele')).toBe('2l2');
  expect(encode('ili')).toBe('3l3');
  expect(encode('olo')).toBe('4l4');
  expect(encode('ulu')).toBe('5l5');
}); 
});

describe('Realiza os teste para saber se as os numeros estão sendo decodificados de maneira correta na função decode', () => {
  it('Realizando o teste de cada numero, esperando que todas as mensagens sejam descriptografadas', () => {
    expect.assertions(6);
    expect(decode('1,2,3,4,5')).toBe('a,e,i,o,u');
    expect(decode('1l1')).toBe('ala');
    expect(decode('2l2')).toBe('ele');
    expect(decode('3l3')).toBe('ili');
    expect(decode('4l4')).toBe('olo');
    expect(decode('5l5')).toBe('ulu');
  });
});

describe('Realiza os testes para saber se o numero de caracteres retornados são iguais aos passados por parametro',() => {
  it('Espera que o retorno do parametro seja 9 quando passado "a,e,i,o,u" ',() => {
    expect.assertions(1);
    expect(encode('a,e,i,o,u').length).toEqual(9);
  });
  
  it('Espera que o retorno do parametro seja 9 quando passado "1,2,3,4,5" ',() => {
    expect.assertions(1);
    expect(encode('1,2,3,4,5').length).toEqual(9);
  });
  
});