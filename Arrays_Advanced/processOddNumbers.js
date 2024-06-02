function processOddNumbers(arr) {
    let result = arr
        .filter((n, i) => i % 2 === 1)
        .map(n => n * 2)
        .reverse()

    console.log(result);
}
processOddNumbers([10, 15, 20, 25])