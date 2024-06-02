function mirrorWord(input) {
    let string = input[0];
    let pattern = /(\@|\#)(?<word1>[A-Za-z]{3,})\1\1(?<word2>[A-Za-z]{3,})\1/gm

    let matches = [...string.matchAll(pattern)];
    let mirrorWords = [];

    for (let match of matches) {
        let word1 = match[2];
        let word2 = match[3];

        let reversedWord2 = word2.split('').reverse().join('');
        if (word1 === reversedWord2) {
            mirrorWords.push(word1 + ' <=> ' + word2)
        }
    }


    if (matches.length === 0) {
        console.log(`No word pairs found!`);
        console.log('No mirror words!');
    } else {
        console.log(`${matches.length} word pairs found!`);
        if (mirrorWords.length === 0) {
            console.log(`No mirror words!`);
        } else {
            console.log(`The mirror words are:`);
            console.log(mirrorWords.join(', '));

        }
    }

}
mirrorWord([ '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#' ])