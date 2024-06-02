function mergeArrays(arr1, arr2) {
    let mergedArr = [];
    for (let i = 0; i < arr1.length; i++) {
        let num1 = arr1[i];
        let num2 = arr2[i];

        if (i % 2 === 0) {
            mergedArr.push(Number(num1) + Number(num2))
        } else {
            mergedArr.push(num1 + num2)
        }
    }


    console.log(mergedArr.join(' - '));

}
mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
)