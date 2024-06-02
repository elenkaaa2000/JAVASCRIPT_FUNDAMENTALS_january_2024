function treasureHunt(input) {
    let loot = input.shift().split('|');

    let command = input.shift();
    
    while (command !== 'Yohoho!') {
        let tokens = command.split(' ');
        let action = tokens.shift();

        if (action === 'Loot') {
            for (let i = 0; i < tokens.length; i++) {
                let curItem = tokens[i];
                if (!loot.includes(curItem)) {
                    loot.unshift(curItem)
                }
            }
        } else if (action === 'Drop') {
            let index = tokens.shift();
            if (index >= 0 && index < loot.length) {
                let item = loot[index];

                loot.splice(index, 1);
                loot.push(item);
            }
        } else if (action === 'Steal') {
            let count = tokens.shift();
             let stolenElements = loot.slice(loot.length - count, loot.length)
             console.log(stolenElements.join(', '));
            loot.splice(loot.length - count)
        }

        command = input.shift()
    }
    
    let sum = 0;
    let avrSum = 0;
    if (loot.length <= 0) {
        console.log("Failed treasure hunt.");
    } else {
        for (let i = 0; i < loot.length; i++) {
            let curSum = loot[i].length
            sum += curSum
        }
        avrSum = sum / loot.length;
        console.log(`Average treasure gain: ${avrSum.toFixed(2)} pirate credits.`);
    }

}
treasureHunt(["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"])

