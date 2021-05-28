let h1 = document.querySelector('body');
let aga = document.createElement('h1');
aga.innerText = 'Exercício 5.2 - JavaScript DOM';
h1.appendChild(aga);

let divMain = document.querySelector('body');
let divMainAdd = document.createElement('div');
divMain.className = 'main-content';
divMain.appendChild(divMainAdd);

let divCenter = document.querySelector('.main-content');
let divCenterAdd = document.createElement('div');
divCenterAdd.className = 'center-content';
divCenter.appendChild(divCenterAdd);

let paragraph = document.querySelector('.center-content');
let addPara = document.createElement('p');
addPara.innerText = 'maçã de asa delta';
paragraph.appendChild(addPara);

let divLeftC = document.querySelector('.main-content');
let addDivLeftC = document.createElement('div');
addDivLeftC.className = 'left-content';
divLeftC.appendChild(addDivLeftC);

let divRigC = document.querySelector('.main-content');
let addDivRigC = document.createElement('div');
addDivRigC.className = 'right-content';
divRigC.appendChild(addDivRigC);

let img = document.querySelector('.left-content');
let addImg = document.createElement('img');
addImg.src = 'https://picsum.photos/200';
addImg.className = 'small-image';
img.appendChild(addImg);

let contagem = ['um, dois, três, quatro, cinco, seis, sete, oito, nove, dez']
let listItens = document.querySelector('.right-content');

for (let index = 0; index < contagem.length; index +=1){
  let cont = contagem[index];
  console.log(cont);
  let addList = document.createElement('ul');
  addList.innerText = cont;
  listItens.appendChild(addList);
}

let tagH3 = document.querySelector('.main-content');
let addTagh31 = document.createElement('h3');
tagH3.appendChild(addTagh31);
let addTagh32 = document.createElement('h3');
tagH3.appendChild(addTagh32);
let addTagh33 = document.createElement('h3');
tagH3.appendChild(addTagh33);








