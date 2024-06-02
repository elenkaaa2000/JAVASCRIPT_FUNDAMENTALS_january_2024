function manOWar(input) {

    let pirateShipStatus = input.shift().split('>').map(Number);
    let warshipStatus = input.shift().split('>').map(Number);
    let healthCapacity = Number(input.shift());
    let command = input.shift();
    let isDead = false;

    while (command !== 'Retire') {
        let tokens = command.split(' ');


        let action = tokens.shift();

        if (action === 'Fire') {
            let index = Number(tokens.shift());
            let damage = Number(tokens.shift());
            if (index >= 0 && index <= warshipStatus.length - 1) {
                warshipStatus[index] -= damage
            }
            if (warshipStatus[index] <= 0) {
                console.log('You won! The enemy ship has sunken.');
                isDead = true;
                break;
            }
        } else if (action === 'Defend') {
            let startIndex = Number(tokens[0]);
            let endIndex = Number(tokens[1]);
            let damage = Number(tokens[2]);
            if (startIndex >= 0 && startIndex < pirateShipStatus.length && endIndex >= 0 && endIndex < pirateShipStatus.length) {
                for (let i = startIndex; i <= endIndex; i++) {
                    pirateShipStatus[i] -= damage
                    if (pirateShipStatus[i] <= 0) {
                        console.log('You lost! The pirate ship has sunken.');
                        isDead = true;
                        break;
                    }
                }

            }
        } else if (action === 'Repair') {
            let index = Number(tokens[0]);
            let health = Number(tokens[1]);

            if (index >= 0 && index < pirateShipStatus.length) {
                if (pirateShipStatus[index] + health >= healthCapacity) {
                    pirateShipStatus[index] = healthCapacity
                } else {
                    pirateShipStatus[index] += health
                }
            }
        } else if (action === 'Status') {
            let count = 0;
            for (let i = 0; i < pirateShipStatus.length; i++) {
                let curSection = Number(pirateShipStatus[i]);
                let repairPercentage = 20 * healthCapacity / 100;
                if (curSection < repairPercentage) {
                    count++
                }

            }
            console.log(`${count} sections need repair.`);
        }


        command = input.shift()
    }


    if (!isDead) {
        let pirateSum = 0;
        let warshipSum = 0;

        for (let p = 0; p < pirateShipStatus.length; p++) {
            let pSection = Number(pirateShipStatus[p]);
            pirateSum += pSection
        }

        for (let w = 0; w < warshipStatus.length; w++) {
            let wSection = Number(warshipStatus[w]);
            warshipSum += wSection
        }

        console.log(`Pirate ship status: ${pirateSum}`);
        console.log(`Warship status: ${warshipSum}`);
    }

}
manOWar(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"])
