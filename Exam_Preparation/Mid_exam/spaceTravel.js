function spaceTravel(input) {
    let route = input.shift().split('||');
    let initialFuel = Number(input.shift());
    let initialAmmunition = Number(input.shift());

    let command = route.shift();

    let isFailed = false;

    while (command !== 'Titan') {
        let [action, number] = command.split(' ');
        number = Number(number)

        if (action === 'Travel') {
            if (number <= initialFuel) {
                initialFuel -= number;
                console.log(`The spaceship travelled ${number} light-years.`);

            } else {
                console.log(`Mission failed.`);
                isFailed = true
                break;
            }

        } else if (action === 'Enemy') {
            let enemyPoints = number;
            if (initialAmmunition >= enemyPoints) {
                initialAmmunition -= enemyPoints;
                console.log(`An enemy with ${enemyPoints} armour is defeated.`);
            } else if (initialAmmunition < enemyPoints) {
                let consumedFuel = enemyPoints * 2;
                if (initialFuel >= consumedFuel) {
                    initialFuel -= consumedFuel;
                    console.log(`An enemy with ${enemyPoints} armour is outmaneuvered.`);
                } else {
                    console.log("Mission failed.");
                    isFailed = true;
                    break;

                }
            }

        } else if (action === 'Repair') {
            let addedAmmunitions = number * 2;
            let addedFuel = number;
            initialAmmunition += addedAmmunitions;
            initialFuel += addedFuel
            console.log(`Ammunitions added: ${addedAmmunitions}.`);
            console.log(`Fuel added: ${addedFuel}.`);
        }

        command = route.shift();
    }
    if (!isFailed) {
        console.log(`You have reached Titan, all passengers are safe.`);
    }
}
spaceTravel(['Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan',
    '60',
    '100'])
