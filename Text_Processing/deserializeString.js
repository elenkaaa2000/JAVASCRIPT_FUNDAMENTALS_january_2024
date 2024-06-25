function deserializeString(input) {
    let command = input.shift();
    let array = [];

    while (command !== 'end') {
        let tokens = command.split(':');
        let symbol = tokens[0]
        let indices = tokens[1].split('/');


        for (let i of indices) {
            array.splice(i, 0, symbol)
        }

        command = input.shift()
    }

    console.log(array.join(''));

}
deserializeString(['a:0/3/5/11',
'v:1/4',
'j:2',
'm:6/9/15',
's:7/13',
'd:8/14',
'c:10',
'l:12',
'end'])