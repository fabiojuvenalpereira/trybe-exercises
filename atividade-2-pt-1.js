
const fatorial = (numero) => {

  let ant = numero;

  while (numero > 2) {
    numero -= 1;
    ant = ant * numero;
    console.log(ant);
  }
  
}

fatorial(5);