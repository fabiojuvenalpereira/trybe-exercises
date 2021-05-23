let n = 5;
let aste = '*';
let guarda = n;

for (let lindex = n; lindex > 0; lindex -= 1) {
    let espaco = '';

    for (let cindex = 0; cindex < lindex; cindex += 1) {

        if (cindex <= guarda) {
            espaco = espaco + ' ';
        }
    }
    aste = aste + '*';
    console.log(espaco + aste);
}