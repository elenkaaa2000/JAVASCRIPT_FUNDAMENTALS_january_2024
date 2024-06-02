function valentineDay(input) {
    let houses = input.shift().split('@').map(Number);
    let command = input.shift();
    let index = 0;

    while (command !== 'Love!') {
        let result = command.split(' ');
        index += Number(result[1])
        if (index > houses.length - 1) {
            index = 0;
        }

        if (houses[index] === 0) {
            console.log(`Place ${index} already had Valentine's day.`);
        } else {
            houses[index] = houses[index] - 2;
            if (houses[index] === 0) {
                console.log(`Place ${index} has Valentine's day.`);
            }
        }
        command = input.shift();
    }

    console.log(`Cupid's last position was ${index}.`);
    let isSuccess = houses.filter(g => g !== 0)

    if (isSuccess.length !== 0) {
        console.log(`Cupid has failed ${isSuccess.length} places.`);
    } else {
        console.log(`Mission was successful.`);
    }


}
valentineDay(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"])

