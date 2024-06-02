function activationKeys(input) {
    let activationKey = input.shift();
    let command = input.shift();

    while (command !== 'Generate') {
        let [action, valueOne, valueTwo, valueThree] = command.split('>>>');

        if (action === 'Contains') {
            if (activationKey.includes(valueOne)) {
                console.log(`${activationKey} contains ${valueOne}`);
            } else {
                console.log('Substring not found!');
            }
        } else if (action === 'Flip') {
            let startIndex = Number(valueTwo);
            let endIndex = Number(valueThree);
            let cut = activationKey.substring(startIndex, endIndex);
            if (valueOne === 'Upper') {
                activationKey = activationKey.replace(cut, cut.toUpperCase())
            } else {
                activationKey = activationKey.replace(cut, cut.toLowerCase())
            }
            console.log(activationKey);

        } else if (action === 'Slice') {
            let startIndex = Number(valueOne);
            let endIndex = Number(valueTwo);
            let cut = activationKey.slice(startIndex, endIndex);

            activationKey = activationKey.replace(cut, '')
            console.log(activationKey);
        }


        command = input.shift()
    }
    console.log(`Your activation key is: ${activationKey}`);

}


activationKeys(["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"])

