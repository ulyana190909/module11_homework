function getNumberOfElements(array) {
    let even_number = 0;
    let odd_number = 0;
    let zero_number = 0;

    for (let i = 0; i < array.length; i++) {
        if (typeof (array[i]) === 'number' && array[i] !== 0 && array[i] % 2 === 0) {
            even_number++;
        }
        if (typeof (array[i]) === 'number' && array[i] % 2 !== 0) {
            odd_number++;
        }
        if (typeof (array[i]) === 'number' && array[i] === 0)
            zero_number++;
    }

    console.log(`четных элементов в массиве:  ${even_number}`);
    console.log(`нечетных элементов в массиве:  ${odd_number}`);
    console.log(`количество элементов в массиве со значением 0:  ${zero_number}`);
}

let array = [3, 4, 5, 'string-1', 6, 7, 0, 'string-2'];

getNumberOfElements(array);
