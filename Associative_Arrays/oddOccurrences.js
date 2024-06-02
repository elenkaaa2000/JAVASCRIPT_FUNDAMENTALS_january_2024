function oddOccurrences(input) {
    let array = input.split(' ');
    let obj = {};

    for (let word of array) {
        let wordFormat = word.toLowerCase();

        if (!obj.hasOwnProperty(wordFormat)) {
            obj[wordFormat] = 1;
        } else {
            obj[wordFormat] += 1;
        }
    }
    let result = []
    Object.entries(obj).forEach(word => {
        if (word[1] % 2 !== 0) {
            result.push(word[0])
        }
    })
    console.log(result.join(' '));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
