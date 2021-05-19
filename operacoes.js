let a = 10 ;
let b = 5 ;
let selecao = "adicao" ;

switch (selecao) {
  case "adicao":
    console.log (a + b);
    break;
  case "subtracao":
    console.log (a - b);
    break;
  case "multiplicacao":
    console.log (a * b);
    break;
  case "divisao":
    console.log (a / b);
    break;
  case "modulo":
    console.log (a % b);
    break;
  default: 
    console.log("nenhum valor a ser apresentado.");
}