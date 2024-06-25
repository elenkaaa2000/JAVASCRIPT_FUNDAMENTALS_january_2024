function valueOfAString(input) {
    let textArray = input.shift().split('');
    let condition = input[0];

    let sum = 0;
    let filtered = []

    if (condition === 'LOWERCASE') {
        filtered = textArray.filter(digit => digit.charCodeAt(digit) >= 97 && digit.charCodeAt(digit) <= 122);
    } else {
        filtered = textArray.filter(digit => digit.charCodeAt(digit) >= 65 && digit.charCodeAt(digit) <= 90);
    }


    filtered.forEach(digit => {
        sum += digit.charCodeAt(digit)
    });

    console.log(`The total sum is: ${sum}`);

}
valueOfAString(['AC/DC',
    'UPPERCASE'])