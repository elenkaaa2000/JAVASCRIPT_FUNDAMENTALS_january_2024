function wordTracker(input) {
    let searchedWordsArr = input.shift().split(' ');
    let searchedWordsObj = {};
    searchedWordsArr.forEach(word => {
        searchedWordsObj[word] = 0;
    });

    for (let word of input) {
        if (word in searchedWordsObj) {
            searchedWordsObj[word]++
        }
    }

    let sorted = Object.entries(searchedWordsObj).sort((a, b) => b[1] - a[1]);

    for (let [word, count] of sorted) {
        console.log(`${word} - ${count}`);
    }

}
wordTracker(
    [
        'is the',
        'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']

)