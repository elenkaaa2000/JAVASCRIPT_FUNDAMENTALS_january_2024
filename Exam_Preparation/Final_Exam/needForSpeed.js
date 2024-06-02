function needForSpeed(input) {
    let carCount = Number(input.shift());
    let cars = {};

    for (let i = 0; i < carCount; i++) {
        let [name, distance, fuel] = input.shift().split('|');
        distance = Number(distance);
        fuel = Number(fuel);
        cars[name] = {
            distance: distance,
            fuel: fuel
        }
    }

    let command = input.shift();

    while (command !== 'Stop') {
        let [action, name, valueOne, valueTwo] = command.split(' : ');
        valueOne = Number(valueOne);
        valueTwo = Number(valueTwo);
        if (cars.hasOwnProperty(name)) {
            switch (action) {
                case 'Drive':
                    if (cars[name]['fuel'] < valueTwo) {
                        console.log('Not enough fuel to make that ride')
                    } else {
                        cars[name]['distance'] += Number(valueOne);
                        cars[name]['fuel'] -= valueTwo;
                        console.log(`${name} driven for ${valueOne} kilometers. ${valueTwo} liters of fuel consumed.`)
                    }

                    if (cars[name]['distance'] >= 100000) {
                        delete cars[name];
                        console.log(`Time to sell the ${name}!`);
                    }
                    break;
                case 'Refuel':
                    if (cars[name]['fuel'] + valueOne >= 75) {
                        let addedFuel = 75 - cars[name]['fuel'];
                        cars[name]['fuel'] = 75
                        console.log(`${name} refueled with ${addedFuel} liters`);

                    } else {
                        cars[name]['fuel'] += valueOne;
                        console.log(`${name} refueled with ${valueOne} liters`);
                    } break;
                case 'Revert':
                    cars[name]['distance'] -= valueOne;


                    if (cars[name]['distance'] < 10000) {
                        cars[name]['distance'] = 10000;
                    } else {
                        console.log(`${name} mileage decreased by ${valueOne} kilometers`);
                    }

            }
        }


        command = input.shift();
    }

    let carsArray = Object.entries(cars);
    for (let [name, info] of carsArray) {
        console.log(`${name} -> Mileage: ${info.distance} kms, Fuel in the tank: ${info.fuel} lt.`)
    }
}

needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]

)