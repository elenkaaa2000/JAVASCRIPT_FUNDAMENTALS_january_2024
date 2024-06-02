function plantDiscovery(input) {
    let n = Number(input.shift());
    let storage = {};

    for (let i = 0; i < n; i++) {
        let flower = input.shift();
        let [name, rarity] = flower.split('<->');
        rarity = Number(rarity)
        storage[name] = {
            name,
            rarity,
            rating: 0,
            count: 0,
        };
    }


    let command = input.shift()

    while (command !== 'Exhibition') {

        let tokens = command.split(': ');
        let action = tokens[0];
        let [name, value] = tokens[1].split(' - ');
        value = Number(value)
        if (storage.hasOwnProperty(name)) {
            switch (action) {
                case 'Rate': storage[name]['rating'] += value
                    storage[name]['count'] += 1; break;
                case 'Update': storage[name]['rarity'] = value;
                    break;
                case 'Reset': storage[name]['rating'] = 0;
                    storage[name]['count'] = 0;
                    break;
            }
        } else {
            console.log('error');
        }

        command = input.shift()
    }
    console.log(`Plants for the exhibition:`);

    for (let key in storage) {
        let avr = storage[key]['rating'] / storage[key]['count'] || 0;
        console.log(`- ${key}; Rarity: ${storage[key]['rarity']}; Rating: ${avr.toFixed(2)}`);
    }
}
plantDiscovery((["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])
)