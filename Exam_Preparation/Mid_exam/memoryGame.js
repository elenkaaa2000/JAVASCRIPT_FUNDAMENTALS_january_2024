function memoryGame(input) {
    let elements = input.shift().split(' ');
    let command = input.shift();
    let moves = 1;

    while (command !== 'end' && elements.length > 0) {

        let [index1, index2] = command.split(' ').map(Number);
        let isCheat = (index1 === index2) || (index1 < 0 || index1 >= elements.length) || (index2 < 0 || index2 >= elements.length);

        if (isCheat) {
            console.log('Invalid input! Adding additional elements to the board');

            let additionalElement = `-${moves}a`;
            let middle = elements.length / 2;
            elements.splice(middle, 0, additionalElement, additionalElement);

        } else {
            if (elements[index1] === elements[index2]) {
                let element = elements[index1]
                console.log(`Congrats! You have found matching elements - ${element}!`);
                elements = elements.filter(el => el !== element)
            } else {
                console.log('Try again!');
            }
        }
        if (elements.length === 0) {
            console.log(`You have won in ${moves} turns!`);
        }
        command = input.shift();
        moves++
    }

    if (elements.length !== 0) {
        console.log('Sorry you lose :(');
        console.log(elements.join(' '));
    }
}
memoryGame([
    "a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"
]

)


