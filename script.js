let idName = document.getElementsByTagName('p');
idName[0].innerText = 'Um desenvolvedor atuando no mercado de trabalho';

let quadrado = document.getElementsByClassName('main-content');
quadrado[0].style.backgroundColor = 'rgb(76,164,109)';

let quadVermelho = document.getElementsByClassName('center-content');
quadVermelho[0].style.backgroundColor = 'white';

let title = document.getElementsByTagName('h1');
title[0].innerText = 'Exercício 5.1 - JavaScript';

let upper = document.getElementsByTagName('p');
for (let i = 0; i < upper.length; i += 1) {
  upper[i].style.textTransform = 'uppercase';
}

let imprime = document.getElementsByTagNamegetElementsByTagName('p');

for (let j = 0; j < imprime.length; j += 1) {
  console.log(imprime[j]);
}
/*
    Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
    - document.getElementById()
    - document.getElementsByClassName()
    - document.getElementsByTagName()
    -1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
    -2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
    -3. Crie uma função que mude a cor do quadrado vermelho para branco.
    -4. Crie uma função que corrija o texto da tag <h1>.
    -5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
    6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
    */
