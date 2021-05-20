let num1 = 500;
let num2 = 7;
let num3 = 10;

let compara = num1;

if (num2 >= compara) {
    compara = num2;
} else if (compara >= num3) {
    console.log('o maior número é:' + compara);
} else {
    console.log('O maior numero é:' + num3);
}

// Conteúdo para entendimento de como funciona o código https://www.javascriptprogressivo.net/2018/08/Script-Recebe-Tres-Numeros-Mostra-Maior.html