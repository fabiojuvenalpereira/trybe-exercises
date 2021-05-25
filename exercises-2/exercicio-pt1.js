let palavra = 'arara';

function compare(palavra) {
    let validation = false;
    let verification = '';

    for (let indexj = palavra.length - 1; indexj >= 0; indexj -= 1) {
        verification = verification + (palavra[indexj]);
    }
    if (verification === palavra) {
        validation = true;
    } else {
        validation = false;
    }

    return validation
}
console.log(compare(palavra));