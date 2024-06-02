function theHuntingGames(input) {
    let days = Number(input.shift());
    let playersCount = Number(input.shift());
    let groupEnergy = Number(input.shift());
    let waterForDayPerPerson = Number(input.shift());
    let foodForDayPerPerson = Number(input.shift());

    let totalWater = waterForDayPerPerson * playersCount * days;
    let totalFood = foodForDayPerPerson * playersCount * days;

    for (let i = 1; i <= days; i++) {
        let energyLostPerDay = Number(input.shift());
        groupEnergy -= energyLostPerDay

        if (groupEnergy <= 0) {
            break;
        }

        if (i % 2 === 0) {
            let boostedEnergy = groupEnergy * 0.05;
            groupEnergy += boostedEnergy

            let droppedWater = totalWater * 0.30;
            totalWater -= droppedWater
        }

        if (i % 3 === 0) {
            let raisedEnergy = groupEnergy * 0.10;
            groupEnergy += raisedEnergy;

            let droppedFood = totalFood / playersCount;
            totalFood -= droppedFood
        }
    }

    if (groupEnergy > 0) {
        console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`);
    } else {
        console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
    }
}
theHuntingGames(["12",
    "6",
    "4430",
    "9.8",
    "5.5",
    "620.3",
    "840.2",
    "960.1",
    "220",
    "340",
    "674",
    "365",
    "345.5",
    "212",
    "412.12",
    "258",
    "496"])

