function demoOddOcc(input) {
    let array = input.split(' ').map(el => el.toLowerCase());

    let map = new Map();


    for (let firstWord of array) {
        let count = 0;

        for (let secondWord of array) {
            if (firstWord === secondWord) {
                count++
            }
        }
        map.set(firstWord, count)
    }

    let filteredArray = Array.from(map.entries()).filter(el => el[1] % 2 !== 0)
    let result = [];

    for (let [word, count] of filteredArray) {
        result.push(word)
    }

    console.log(result.join(' '));
}
demoOddOcc('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')