let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     let showNumber = numbers[index];
//     sum = sum + showNumber;
// }
// console.log('A soma do Array é: ' + sum);

// // exercicio 3
// let med = sum / numbers.length;
// console.log('A média é: ' + med);

// // exercicio 4
// if (med > 20) {
//     console.log('O valor é maior que 20');
// } else {
//     console.log('O valor é menor ou igual a 20');
// }

// exercicio 5
let maiorValor = 0;

for (let indexCompare = 0; indexCompare < numbers.length; indexCompare += 1) {

    if (numbers[indexCompare] > maiorValor) {
        maiorValor = numbers[indexCompare];
    }
}
console.log(maiorValor);