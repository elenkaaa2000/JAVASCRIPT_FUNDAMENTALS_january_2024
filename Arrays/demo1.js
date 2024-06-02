function demo1(arr){
   let games=arr[0].split(' ')

for(let i=1; i<arr.length; i++){
    let curEl=arr[i].split(' ');
    let command=curEl[0];
    let gameName=curEl[1];
    
    if(command === 'Play!'){
        break;
    } else if(games.includes(gameName) === false && command === 'Instal'){
        games.push(gameName)
    } else if(games.includes(gameName) === false && command === "Uninstall"){
        let index=games.indexOf(gameName);
        games.splice(index,1)
    } else if(command==='Update' && games.includes(gameName)=== false){
        let index=games.indexOf(gameName);
        games.splice(index,1);
        games.push(gameName)
    } else if(command==='Expansion' ){
        let expansion=gameName.split('-');
        let game=expansion[0];

        if(games.includes(game)){
            let expandedGame=expansion.join(':')
            let index=games.indexOf(game);
            games.splice(index+1,0,expandedGame)
        }

    }
   
}
console.log(games.join(' '));
}
demo1(['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!']
)