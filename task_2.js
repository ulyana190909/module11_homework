function findPrimeNumber(number) {
    let flag = true;
    if (typeof (number) === 'number' && number !== 0 && number !== 1 && number < 1000) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                flag = false;
                break;
            }
        }
        if (flag == true) {
            console.log(`число ${number} является простым`);
        } else {
            console.log(`число ${number} является составным`);
        }
    } else {
        console.log(`данные неверные`);
    }

}

findPrimeNumber(50);
findPrimeNumber(683);
findPrimeNumber(`683`);
findPrimeNumber(1000);
