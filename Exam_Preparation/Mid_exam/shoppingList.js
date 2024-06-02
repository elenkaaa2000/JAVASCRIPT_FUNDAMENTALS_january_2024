function shoppingList(input) {
    let list = input.shift().split('!');
    let command = input.shift();

    while (command !== 'Go Shopping!') {
        let [action, itemOne, itemTwo] = command.split(' ');

        switch (action) {
            case 'Urgent':
                if (list.includes(itemOne) === false) {
                    list.push(itemOne)
                }
                break;
            case 'Unnecessary':
                if (list.includes(itemOne)) {
                    let index = list.indexOf(itemOne);
                    list.splice(index, 1);
                }
                break;
            case 'Correct':
                if (list.includes(itemOne)) {
                    let idx = list.indexOf(itemOne);
                    list.splice(idx, 1, itemTwo)
                }
                break;
            case 'Rearrange':
                if (list.includes(itemOne)) {
                    let ind = list.indexOf(itemOne);
                    list[ind]=itemTwo
                }
                break;
        }

        command = input.shift()
    }
    console.log(list.join(', '));
}
shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])
