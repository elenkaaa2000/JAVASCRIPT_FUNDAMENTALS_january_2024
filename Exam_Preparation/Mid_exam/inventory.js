function inventory(input) {
    let journal = input.shift().split(', ');
    let command = input.shift();

    while (command !== 'Craft!') {
        let [action, item] = command.split(' - ');

        switch (action) {
            case 'Collect':
                if (!journal.includes(item)) {
                    journal.push(item);
                }
                break;
            case 'Drop':
                if (journal.includes(item)) {
                    let index = journal.indexOf(item);
                    journal.splice(index, 1);
                } break;
            case 'Combine Items':
                let itemCombination = item.split(':');
                let oldItem = itemCombination[0];
                let newItem = itemCombination[1];

                if (journal.includes(oldItem)) {
                    let idx = journal.indexOf(oldItem);
                    journal.splice(idx + 1, 0, newItem);
                }
                break;
            case 'Renew':
                if (journal.includes(item)) {
                    let indexRenew = journal.indexOf(item);
                    let renewItem = journal[indexRenew]
                    journal.splice(indexRenew, 1);
                    journal.push(renewItem)
                }
        }

        command = input.shift()
    }
    console.log(journal.join(', '));
}
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]
)