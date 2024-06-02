function printNthElement(arr) {
    let step = arr.pop();
    let resultArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % step === 0) {
            resultArr.push(arr[i])
        }
    }
    console.log(resultArr.join(' '))

}
printNthElement(['dsa', 'asd', 'test', 'test', '2'])