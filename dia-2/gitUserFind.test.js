const getRepos = require('./gitUserFind');

describe('Tentando se a função getRepos retorna o resultado esperado', () => {
  it('Deveria retornar o repositorio sd-01-week4-5-project-todo-list', async () => {
    await expect(getRepos('https://api.github.com/orgs/tryber/repos')).resolves.toContain('sd-01-week4-5-project-todo-list');
  });
  it('Deveria retornar o repositorio sd-01-week4-5-project-meme-generator', async () => {
    await expect(getRepos('https://api.github.com/orgs/tryber/repos')).resolves.toContain('sd-01-week4-5-project-meme-generator');
  });


});
