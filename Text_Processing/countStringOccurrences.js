function countStringOccurrences(text, word) {
    let textArray = text.split(' ');

    let count = 0;

    for (let element of textArray) {
        if (element === word) {
            count++
        }
    }

    console.log(count);

}
countStringOccurrences('softuni is great place for learning new programming languages',
    'softuni')