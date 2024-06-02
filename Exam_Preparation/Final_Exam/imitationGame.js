function imitationGame(input) {
    let encryptedMessage = input.shift().split('');
    let command = input.shift();

    while (command !== 'Decode') {
        let [action, value1, value2] = command.split('|');
        if (action === 'Move') {
            for (let i = 0; i < value1; i++) {
                let movedLetter = encryptedMessage.shift();
                encryptedMessage.push(movedLetter)
            }


        } else if (action === 'Insert') {

            encryptedMessage.splice(value1, 0, value2)

        } else if (action === 'ChangeAll') {
            for (let letter of encryptedMessage) {
                if (letter === value1) {
                    let index = encryptedMessage.indexOf(letter);
                    encryptedMessage.splice(index, 1, value2)
                }
            }

        }

        command = input.shift()
    }
    console.log(`The decrypted message is: ${encryptedMessage.join('')}`);
}
imitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
]
)