function condenseArrayToNumber(array) {
    while (array.length > 1) {
        let condensed = Array(array.length - 1);
        for (let i = 0; i < array.length - 1; i++) {
            condensed[i] = array[i] + array[i + 1];
        }
        array = condensed
    }

    console.log(array[0]);
}
condenseArrayToNumber([5, 0, 4, 1, 2])