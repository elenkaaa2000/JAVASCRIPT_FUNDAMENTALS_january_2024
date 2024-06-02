function muOnline(input) {
    let rooms = input.split('|');
    let health = 100;
    let bitcoins = 0;
    let bestRoom = 0;
    let isDead = false;

    for (let i = 0; i < rooms.length; i++) {
        let currentRoom = rooms[i];
        bestRoom++
        let [command, number] = currentRoom.split(' ');

        if (command === 'potion') {
            let healed = Number(number)
            if (health + healed > 100) {
                healed = 100 - health;
            }
            health += healed
            console.log(`You healed for ${healed} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (command === 'chest') {
            let foundBitCoins = Number(number);
            bitcoins += foundBitCoins;
            console.log(`You found ${foundBitCoins} bitcoins.`);

        } else {
            let monster = command;
            let attack = Number(number);
            health -= attack
            if (health <= 0) {
                console.log(`You died! Killed by ${monster}.`);
                console.log(`Best room: ${bestRoom}`);
                isDead = true;
                break;
            } else {
                console.log(`You slayed ${monster}.`);
            }
        }
    }
    if (!isDead) {
        console.log("You've made it!");
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }

}
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")