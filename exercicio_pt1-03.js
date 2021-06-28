const gabarito = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const provaAluno= ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

function verify(gaba, nota){
  let notaAluno = 0;
  if (gaba === nota) {
    notaAluno = notaAluno += 1;
  } else if (gaba === 'N.A') {
    notaAluno = notaAluno + 0 ;
  } else {
    notaAluno -= 0.5 ; 
  }
  return notaAluno;
}

const avaliator = (gabarito, provaAluno, verify) => {
  let saveValue = 0;
  for (let index = 0; index <= gabarito.length; index += 1) {   
    let test = verify(gabarito[index], provaAluno[index]);
    saveValue = saveValue + test;
  }
  return saveValue
}

console.log(avaliator(gabarito,provaAluno,verify));