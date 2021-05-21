let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let contadorimpar = 0;
let contadorpar = 0;
let maiorValor = 0;

for (let index = 0; index < numbers.length; index += 1) {
    let showNumber = numbers[index];
    sum = sum + showNumber;
}
console.log('A soma do Array é: ' + sum);

// exercicio 3
let med = sum / numbers.length;
console.log('A média é: ' + med);

// exercicio 4
if (med > 20) {
    console.log('O valor é maior que 20');
} else {
    console.log('O valor é menor ou igual a 20');
}

//exercicio 5


for (let indexCompare = 0; indexCompare < numbers.length; indexCompare += 1) {

    if (numbers[indexCompare] > maiorValor) {
        maiorValor = numbers[indexCompare];
    }
}
console.log('O maior número do Array é: ' + maiorValor);

//exercicio 6

for (let percorre = 0; percorre < numbers.length; percorre += 1) {
    if (numbers[percorre] % 2 === 1) {
        contadorimpar += 1;
    }
}
if (contadorimpar === 0) {
    console.log('Nenhum valor encontrado')
} else {
    console.log('São ' + contadorimpar + ' Números Ímpares.');
}