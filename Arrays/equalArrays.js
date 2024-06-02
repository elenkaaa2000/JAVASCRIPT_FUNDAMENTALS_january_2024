function equalArrays(array1, array2) {

    for (let i = 0; i < array1.length; i++) {
        array1[i] = Number(array1[i])
    }

    for (let i = 0; i < array2.length; i++) {
        array2[i] = Number(array2[i])
    }

    let isEqual = true;
    sum = 0;
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            console.log(`Arrays are not identical. Found difference at ${[i]} index`);
            isEqual = false
            break;
        } else {
            sum += array1[i]

        }

    }

    if (isEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }

}
equalArrays(['1'], ['10'])