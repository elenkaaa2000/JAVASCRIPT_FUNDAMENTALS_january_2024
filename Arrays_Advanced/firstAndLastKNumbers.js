function firstAndLastKNumbers(arr) {
    let kNumber = arr.shift();

    let firstNumbers = arr.slice(0, kNumber);
    let secondNumbers = arr.slice(arr.length - kNumber)

    console.log(firstNumbers.join(' '));
    console.log(secondNumbers.join(' '));
}
firstAndLastKNumbers([3, 6, 7, 8, 9])