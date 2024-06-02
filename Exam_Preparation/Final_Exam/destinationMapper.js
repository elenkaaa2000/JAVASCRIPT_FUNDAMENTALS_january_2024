function destinationMapper(input) {

    let pattern = /(=|\/)(?<name>[A-Z][a-z]{2,})\1/gm;

    let validDestinations = [];
    let validDestionation;

    while ((validDestionation = pattern.exec(input)) !== null) {
        let name = validDestionation.groups['name'];
        validDestinations.push(name)
    }
    let sum = 0;
    for (let destionation of validDestinations) {
        sum += destionation.length
    }
    console.log(`Destinations: ${validDestinations.join(', ')}`);
    console.log(`Travel Points: ${sum}`);
}
destinationMapper(("ThisIs some InvalidInput"))