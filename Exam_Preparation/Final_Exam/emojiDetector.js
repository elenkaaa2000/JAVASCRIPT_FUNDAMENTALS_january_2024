function emojiDetector(input) {

    let patterDigit = /\d/gm;
    let digits = [];
    let digit;
    let coolThreshold = 1;
    while ((digit = patterDigit.exec(input)) !== null) {
        digits.push(Number(digit[0]))
    }

    for (let digit of digits) {
        coolThreshold *= digit
    }
    console.log(`Cool threshold: ${coolThreshold}`)

    let emojiPattern = /(\:{2}|\*{2})(?<emoji>[A-Z][a-z]{2,})\1/g;
    let emojiArray = [];
    let validEmoji;
    while ((validEmoji = emojiPattern.exec(input)) !== null) {
        emojiArray.push(validEmoji[0])
    }
    console.log(`${emojiArray.length} emojis found in the text. The cool ones are:`)


    for (let emoji of emojiArray) {
        let coolnessOfEmoji = 0;

        for (let letter of emoji) {
            if (letter.charCodeAt(0) > 65 && letter.charCodeAt(0) <= 122) {
                coolnessOfEmoji += letter.charCodeAt(0)
            }
        }
        if (coolnessOfEmoji > coolThreshold) {
            console.log(emoji);
        }

    }

}

emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"])