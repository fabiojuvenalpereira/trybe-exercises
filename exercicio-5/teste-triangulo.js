let angulo1 = 50;
let angulo2 = 50;
let angulo3 = 80;
let anguloEsperado = 180;

if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
    console.log('Não pode ser um número negativo.')
} else if (angulo1 + angulo2 + angulo3 === anguloEsperado) {
    console.log('Parabéns!!! isso sim é um triângulo')
} else {
    console.log('A soma dos angulos internos não é 180, ou seja, não é um triângulo!')
}