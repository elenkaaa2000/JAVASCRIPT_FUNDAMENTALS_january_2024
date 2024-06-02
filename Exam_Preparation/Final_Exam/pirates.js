function pirates(input) {
    let citiesObject = {};

    let cityLine = input.shift();

    while (cityLine !== 'Sail') {
        let [city, population, gold] = cityLine.split('||');
        population = Number(population);
        gold = Number(gold)
        if (!citiesObject.hasOwnProperty(city)) {
            citiesObject[city] = {
                population,
                gold
            }
        } else {
            citiesObject[city]['population'] += population;
            citiesObject[city]['gold'] += gold
        }

        cityLine = input.shift()
    }

    let command = input.shift();

    while (command !== 'End') {
        let tokens = command.split('=>');
        let action = tokens.shift()

        if (action === 'Plunder') {
            let city = tokens[0]
            let people = Number(tokens[1]);
            let gold = Number(tokens[2]);

            if (city in citiesObject) {
                citiesObject[city].population -= people;
                citiesObject[city].gold -= gold;

                console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`);
            }

            if (citiesObject[city]['population'] === 0 || citiesObject[city]['gold'] === 0) {
                delete citiesObject[city]
                console.log(`${city} has been wiped off the map!`);
            }
        } else {
            let city = tokens[0];
            let gold = Number(tokens[1]);

            if (city in citiesObject) {
                if (gold < 0) {
                    console.log(`Gold added cannot be a negative number!`);
                } else {
                    citiesObject[city].gold += gold;
                    console.log(`${gold} gold added to the city treasury. ${city} now has ${citiesObject[city]['gold']} gold.`);
                }
            }
        }

        command = input.shift()
    }
    let citiesArray = Object.entries(citiesObject);
    if (citiesArray.length === 0) {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed");
    } else {
        console.log(`Ahoy, Captain! There are ${citiesArray.length} wealthy settlements to go to:`);
        for (let [name, info] of citiesArray) {
            console.log(`${name} -> Population: ${info.population} citizens, Gold: ${info.gold} kg`);
        }
    }
}
pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"])

