let deArray = [2, 3, 6, 7, 10, 1];
let num = 0;
let maiorNum = 0;
let indexNum = 0;

function findIndex(deArray) {

    for (let index in deArray) {
        let num = deArray[index];

        for (let ind = 0; ind < deArray.length; ind += 1) {
            if (deArray[ind] > num) {
                num = deArray[ind];
                indexNum = ind
            }
        }
        maiorNum = num;
    }

    return indexNum
}
console.log(findIndex(deArray));