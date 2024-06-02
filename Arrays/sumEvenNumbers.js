function sumEvenNumbers(array) {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        let currentNumber = Number(array[index]);

        if (currentNumber % 2 === 0) {
            sum += currentNumber
        }
    }
    console.log(sum);
}
sumEvenNumbers(['3', '5', '7', '9'])