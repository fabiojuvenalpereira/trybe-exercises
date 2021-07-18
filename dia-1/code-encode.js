function cripto(letra) {
  if (letra === 'a') {
    letra = 1;
  } else if (letra === 'e') {
    letra = 2;
  } else if (letra === 'i') {
    letra = 3;
  } else if (letra === 'o') {
    letra = 4;
  } else if (letra === 'u') {
    letra = 5;
  }
  return letra;
}

function encode(texto) {
  let encoding = '';
  let letra = '';
  for (let index = 0; index < texto.length; index += 1) {
    letra = texto[index];
    letra = cripto(letra);
    encoding += letra;
  }
  return encoding;
}
function decriptando(decNumb) {
  let numdecript = '';
  if (decNumb === '1') {
    decNumb = 'a';
  } else if (decNumb === '2') {
    decNumb = 'e';
  } else if (decNumb === '3') {
    decNumb = 'i';
  } else if (decNumb === '4') {
    decNumb = 'o';
  } else if (decNumb === '5') {
    decNumb = 'u';
  }
  numdecript = decNumb;
  return numdecript;
}

function decode(decrpt) {
  let decoding = '';
  let recebevalue = '';
  let decNumb = '';
  for (let indexX = 0; indexX < decrpt.length; indexX += 1) {
    decNumb = decrpt[indexX];
    recebevalue = decriptando(decNumb);
    decoding += recebevalue;
  }
  return decoding;
}

const functions = { encode, decode};
module.exports = functions;