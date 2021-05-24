// objeto base
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
let infoPatinhas = {
    personagem: 'Tio Patinhas',
    origem: "christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'sim',
}

//1.

// console.log('Bem-Vinda, ' + info.personagem + '!');

//2.

info['recorrente'] = 'Sim';
// console.log(info);

//3.
for (let index in info) {
    // console.log([index]);
}

//4.
for (let key in info) {
    // console.log(info[key]);
}


function bemVindo() {

    for (let indexGeral in infoPatinhas) {

        let nome = 0; //variável para concatenação;
        let nome1 = 0;
        let nome2 = 0;

        for (let index in info) {

            if (index === indexGeral) {
                nome1 = info[index];
                // console.log(nome1);
            }
        }

        for (let indexX in infoPatinhas) {

            if (indexX === indexGeral) {
                nome2 = infoPatinhas[indexX];
                // console.log(nome2);
            }
        }

        if (nome1 && nome2 === 'sim') {

            console.log('Ambos Recorrentes');

        } else {

            nome = nome1 + ' e ' + nome2;
            console.log(nome);

        }


    }

}

bemVindo();