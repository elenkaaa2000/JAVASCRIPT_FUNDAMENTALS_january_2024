function secretChat(input) {
    let message = input.shift();

    let command = input.shift();

    while (command !== 'Reveal') {
        let tokens = command.split(':|:');
        let action = tokens[0];

        if (action === 'InsertSpace') {
            let index = Number(tokens[1]);
            message = message.slice(0, index) + ' ' + message.slice(index);

            console.log(message);

        } else if (action === 'Reverse') {
            let substring = tokens[1];
            let index = message.indexOf(substring);

            if (message.includes(substring)) {

                let reversedSubstring = substring.split('').reverse().join('');


                message = message.slice(0, index) + reversedSubstring

            } else {
                console.log('error');
            }
            console.log(message);
        } else if (action === 'ChangeAll') {
            let oldLetter = tokens[1];
            let newLetter = tokens[2]
            for (let letter of message) {
                if (letter === oldLetter) {
                    message = message.replace(letter, newLetter);
                }
            }
            console.log(message);
        }

        command = input.shift()
    }
    console.log(`You have a new text message: ${message}`);
}
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]

)