function evenAndOddSubtraction(input) {
    let evenSum = 0;
    let oddSum = 0;

    for (let index = 0; index < input.length; index++) {
        let currentNum = Number(input[index]);

        if (currentNum % 2 === 0) {
            evenSum += currentNum
        } else {
            oddSum += currentNum
        }

    }
    
    console.log(evenSum - oddSum);
}
evenAndOddSubtraction([1, 2, 3, 4, 5, 6])