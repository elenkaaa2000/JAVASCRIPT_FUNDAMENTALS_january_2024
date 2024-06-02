function pianist(input) {
    let piecesCount = Number(input.shift());
    let catalogue = {};

    for (let i = 0; i < piecesCount; i++) {
        let curPiece = input.shift();
        let [name, composer, key] = curPiece.split('|');

        catalogue[name] = { composer, key };
    }


    let command = input.shift();

    while (command !== 'Stop') {
        let tokens = command.split('|');
        let action = tokens[0];
        let name = tokens[1];
        if (action === 'Add') {

            let composer = tokens[2];
            let key = tokens[3];

            if (catalogue.hasOwnProperty(name)) {
                console.log(`${name} is already in the collection!`);
            } else {
                catalogue[name] = { composer, key };
                console.log(`${name} by ${composer} in ${key} added to the collection!`);
            }
        } else if (action === 'Remove') {
            if (catalogue.hasOwnProperty(name)) {
                delete catalogue.name
                console.log(`Successfully removed ${name}!`);
            } else {
                console.log(`Invalid operation! ${name} does not exist in the collection.`);
            }
        } else if (action === 'ChangeKey') {
            let newKey = tokens[2]
            if (catalogue.hasOwnProperty(name)) {
                catalogue[name].key = tokens[2];
                console.log(`Changed the key of ${name} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${name} does not exist in the collection.`);
            }
        }

        command = input.shift()
    }
    let catalogueArray = Object.entries(catalogue);
    for (let [name, piece] of catalogueArray) {
        console.log(`${name} -> Composer: ${piece.composer}, Key: ${piece.key}`);
    }
}
pianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]
)