function counterStrike(input) {
    let initialEnergy = Number(input.shift());
    let command = input.shift();
    let wonBattle = 0;
    let isEnd = false;

    while (command !== 'End of battle') {
        let distance = Number(command);

        initialEnergy -= distance;
        wonBattle++;

        if (wonBattle % 3 === 0) {
            initialEnergy += wonBattle
        }
        if (initialEnergy < distance) {
            isEnd = true;
            break;
        }


        command = input.shift()
    }
    if (isEnd) {
        console.log(`Not enough energy! Game ends with ${wonBattle} won battles and ${initialEnergy} energy`);
    } else {
        console.log(`Won battles: ${wonBattle}. Energy left: ${initialEnergy}`);
    }

}
counterStrike(["100",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10"])

