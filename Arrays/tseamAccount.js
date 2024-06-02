function tseamAccount(arr) {
    let gamesInfo = arr.shift(0);
    let games = gamesInfo.split(' ')

    for (let i = 1; i < arr.length; i++) {
        let currEl = arr[i].split(' ');
        let command = currEl[0];
        let newGame = currEl[1];

        if (command === "Play!") {
            break;
        } else if (command === "Install" && games.inclused(newGame) === false) {
            games.push(newGame)
        } else if (command === "Uninstall" && games.includes(newGame) === false) {
            let index = games.indexOf(newGame);
            games.splice(index, 1)

        } else if (command === "Update" && games.includes(newGame) === false) {
            let index = games.indexOf(newGame);
            games.splice(index, 1);
            games.push(newGame);
        } else if (command === "Expansion") {
            let expansion = newGame.split('-');
            let game = expansion[0];

            if (games.includes(game)) {
                let expandedGame = expansion.join(':');
                let index = games.indexOf(game);
                games.splice(index + 1, 0, expandedGame)

            }
        }
    }



    console.log(games.join(' '));

}


tseamAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!']
)