function wordOccurrences(input) {
    /*let words = {};

    input.forEach(word => {

        if (!words.hasOwnProperty(word)) {
            words[word] = 1
        } else {
            words[word] += 1
        }
    })

    let sortedArray = Object.entries(words).sort((a, b) => b[1] - a[1]);

    for (let currentWordInfo of sortedArray) {
        console.log(`${currentWordInfo[0]} -> ${currentWordInfo[1]} times`);
    }*/

    let map = new Map;

    for (let word of input) {

        if (!map.has(word)) {
            map.set(word, 1)
        } else {
            let currentCount = map.get(word);
            let newCount = currentCount += 1;
            map.set(word, newCount)

        }
    }

    let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);

    sorted.forEach(el => {
        console.log(`${el[0]} -> ${el[1]} times`);
    })

}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])