function getSumNumber(number) {
    return function getTwoNumber(number_2) {
        let sum = number + number_2;
        console.log(sum);
    }
}

function getTwoNumber(number) {
    return number;
}

let sumNumber = getSumNumber(4);
sumNumber(8);
