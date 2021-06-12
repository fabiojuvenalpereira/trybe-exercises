const estadosBrasileiros = {
  AC: "Acre",
  AL: "Alagoas",
  AP: "Amapá",
  AM: "Amazonas",
  BA: "Bahia",
  CE: "Ceará",
  DF: "Distrito Federal",
  ES: "Espírito Santo",
  GO: "Goías",
  MA: "Maranhão",
  MT: "Mato Grosso",
  MS: "Mato Grosso do Sul",
  MG: "Minas Gerais",
  PA: "Pará",
  PB: "Paraíba",
  PR: "Paraná",
  PE: "Pernambuco",
  PI: "Piauí",
  RJ: "Rio de Janeiro",
  RN: "Rio Grande do Norte",
  RS: "Rio Grande do Sul",
  RO: "Rondônia",
  RR: "Roraíma",
  SC: "Santa Catarina",
  SP: "São Paulo",
  SE: "Sergipe",
  TO: "Tocantins",
};

const getName = document.querySelector('#full-name');
const getEmail = document.querySelector('#e-mail');
const getCpf = document.querySelector('#input-cpf');
const getAdress = document.querySelector('#input-adress');
const getCidade = document.querySelector('#input-city');
const getEstado = document.querySelector('#input-estados');
const getResumo = document.querySelector('#input-abstract');
const getCargo = document.querySelector('#input-role');
const getDescriptCargo = document.querySelector('#input-role-Description');
const getDate = document.querySelector('#input-initiation-date');
const submit = document.querySelector('#submit');
const tela = document.querySelector('main');

function getStates() {
  for (let index in estadosBrasileiros) {
    const getOption = document.querySelector('#input-estados');
    const createOp = document.createElement('option');
    createOp.innerText = estadosBrasileiros[index];
    getOption.appendChild(createOp);
    if (index === 'MG') {
      getOption.appendChild(createOp).selected =true;
    }
  }
}

getStates();

function criaDiv(){
  const div = document.createElement('div');
  div.classList.add('divMeio'); 
  return div
}

function verifyDay() {  
  const dateValue = getDate.value;
  const day = dateValue[0].concat(dateValue[1]);
  if (day > 0 && day <=31) {
    return true;
  } else {
    return false;
  }
}

function verifyMonth() { 
  const dateValue = getDate.value;
  const month = dateValue[3].concat(dateValue[4]);
  if (month > 0 && month < 13 ){
    return true;
  } else {
    return false;    
  }
}

function verifyYear(){
  const dateValue = getDate.value;
  const year = dateValue[6].concat(dateValue[7],dateValue[8],dateValue[9]);
  if(year > 1900 && year < 2022){
    return true;
  } else {
    return false;
  }
}

function verificaData(){
  const divDay = criaDiv();
  const dateDay = verifyDay();
  const dateMonth = verifyMonth();
  const dateYear = verifyYear();
  const p = document.createElement('p');
  if (dateDay && dateMonth && dateYear === true){
    return true
  } else if (dateDay === false) {
    divDay.innerText = 'Dia inválido, por favor insira um dia correto!';
    tela.appendChild(divDay);
  } else if (dateMonth === false) {
    divDay.innerText = 'Mês inválido, por favor insira um mês correto!';
    tela.appendChild(divDay);
  } else if (dateYear === false) {
    divDay.innerText = 'O ano inserido é inválido, por favor insira um dia correto!';
    tela.appendChild(divDay);
  } else {
    divDay.innerText = 'Data inserida inválida';
    tela.appendChild(divDay);
  }

}
const body = document.querySelector('body');

body.addEventListener('click', (even) => {
  if(even.target.classList.contains('divMeio')){
   even.target.parentNode.removeChild(even.target);
  };
});

submit.addEventListener('click', (evento) => {
   verificaData();
});




