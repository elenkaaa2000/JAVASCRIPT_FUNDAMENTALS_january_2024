function addAndSubstract(input) {

    let oldSum = 0;
    let newSum = 0;
    for (let index = 0; index < input.length; index++) {
        let currentNumber = Number(input[index]);
        oldSum += currentNumber;
        if (currentNumber % 2 === 0) {
            currentNumber = currentNumber + index
            newSum += currentNumber
        } else {
            currentNumber = currentNumber - index
            newSum += currentNumber
        }
        input[index] = currentNumber
    }
    console.log(input);
    console.log(oldSum);
    console.log(newSum);
}
addAndSubstract([5, 15, 23, 56, 35])