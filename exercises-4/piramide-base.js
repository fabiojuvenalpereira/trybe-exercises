let n = 5;
let aste = '';
let posx = 0;
let posy = 0;

for (let index = 0; index < n; index += 1) {

    for (let indexB = 0; indexB < n; indexB += 1) {

        if (indexB < n) {
            aste = aste + ' ';
        }
        aste = aste + '*'
    }
    console.log(aste)

}