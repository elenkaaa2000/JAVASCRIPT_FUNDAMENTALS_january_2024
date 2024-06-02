function worldTour(input) {
    let destionations = input.shift()
    let command = input.shift();

    while (command !== 'Travel') {
        let tokens = command.split(':');
        let [action, valueOne, valueTwo] = tokens;

        if (action === 'Add Stop') {
            valueOne = Number(valueOne);
            if (valueOne >= 0 && valueOne <= destionations.length - 1) {
                destionations = destionations.slice(0, valueOne) + valueTwo + destionations.slice(valueOne)

            }
            console.log(destionations);
        } else if (action === 'Remove Stop') {
            valueOne = Number(valueOne);
            valueTwo = Number(valueTwo);

            if (valueOne >= 0 && valueOne <= destionations.length - 1 && valueTwo >= 0 && valueTwo <= destionations.length - 1) {
                destionations = destionations.slice(0, valueOne) + destionations.slice(valueTwo + 1);
            }
            console.log(destionations);
        } else if (action === 'Switch') {
            if (destionations.includes(valueOne)) {

                destionations = destionations.replace(valueOne, valueTwo)

            }
            console.log(destionations);
        }

        command = input.shift()
    }
    console.log(`Ready for world tour! Planned stops: ${destionations}`)


}
worldTour((["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])
)

