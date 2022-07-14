function getNumber(number_1, number_2) {
    let i = number_1;
    setInterval(function () {
        if (i <= number_2) {
            console.log(i);
            i++;
        }
    }, 1000)
}

getNumber(5, 15);