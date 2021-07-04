const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const expectedResult = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
];

function formatedBookNames() {
  let names = books.map((book) => {
    return `${book.name} - ${book.genre} - ${book.author.name}`
  })
  return names
}

const expectedResult1 = [
  {
    age: 31,
    author: 'Isaac Asimov',
  },
  {
    age: 38,
    author: 'H. P. Lovecraft',
  },
  {
    age: 39,
    author: 'Stephen King',
  },
  {
    age: 43,
    author: 'George R. R. Martin',
  },
  {
    age: 45,
    author: 'Frank Herbert',
  },
  {
    age: 62,
    author: 'J. R. R. Tolkien',
  },
];

function nameAndAge() {
   let objNames = books.map((book) => {
    return {age: book.releaseYear - book.author.birthYear , author:book.author.name }
   });

   return objNames.sort((a,b) => a.age - b.age)
}

const expectedResult2 = [
  { 
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965
  }
];

function fantasyOrScienceFiction() {
  return books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica')
}

const expectedResult3 = [
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
];

function oldBooksOrdered() {
  const dataAtual = new Date().getFullYear() - 60;
  let livrosFiltrados = books.filter((book) => (book.releaseYear < dataAtual))
  return livrosFiltrados.sort((a,b) => {
    return a.releaseYear - b.releaseYear
  })
}

const expectedResult4 = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors() {
  let getNames = books.filter((book) => {
    if (book.genre === 'Fantasia' || book.genre === 'Ficção Científica') {
      return book.author.name
    }
  }).map((livro) => livro.author.name)

  return getNames.sort();
}

const expectedResult5 = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks() {
  const atualDate = new Date().getFullYear() - 60;
  return books.filter((book) => {
    if (book.releaseYear < atualDate) {
      return book.name
    }
  }).map((livro) => livro.name)
}

const expectedResult6 = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  let nameAuthor = books.find((book) => {
    return book.author.name.split(' ').filter((livro) => {
      return livro.endsWith('.')
    }).length === 3
  })
  return nameAuthor
}

console.log(authorWith3DotsOnName())
// assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult6);
assert.deepStrictEqual(oldBooks(), expectedResult5);
assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult4);
assert.deepStrictEqual(oldBooksOrdered(), expectedResult3);
assert.deepStrictEqual(fantasyOrScienceFiction(), expectedResult2);
assert.deepStrictEqual(nameAndAge(), expectedResult1);
assert.deepStrictEqual(formatedBookNames(), expectedResult);
