
function sorteio(){  
  let  numSort = Math.random() * 5;
  numSort = Math.round(numSort);
  if( numSort < 1){
    return 1;
  }
  return numSort;
}

const resSort = (num, callback) => {
  if (num === callback){
    return 'Parabéns Você Ganhou';
  } else {
    return 'Tente Novamente!';
  }
}

for (let index = 0; index < 10; index++) {
  console.log(resSort(2,sorteio()));
}