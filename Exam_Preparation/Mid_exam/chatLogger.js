function chatLogger(input) {
    let command = input.shift();
    let chathistory = [];
    while (command !== 'end') {
        let tokens = command.split(' ');
        let action = tokens.shift();
        let message = tokens[0]
        switch (action) {
            case 'Chat':
                chathistory.push(message);
                break;
            case 'Delete':
                if (chathistory.includes(message)) {
                    let index = chathistory.indexOf(message)
                    chathistory.splice(index, 1);
                }
                break;
            case 'Edit':
                if (chathistory.includes(message)) {
                    let edittedVersion = tokens[1];
                    let idx = chathistory.indexOf(message);
                    chathistory.splice(idx, 1, edittedVersion);
                }
                break;
            case 'Pin':
                if (chathistory.includes(message)) {
                    let i = chathistory.indexOf(message);
                    let pinnedMess = message;
                    chathistory.splice(i, 1);
                    chathistory.push(pinnedMess);
                }
                break;
            case 'Spam':
                let addedMess = tokens.slice();

                for (let element of addedMess) {
                    chathistory.push(element)
                }

        }
        command = input.shift()
    }
    console.log(chathistory.join('\n'));
}
chatLogger(["Chat Hello",
    "Chat darling",
    "Edit darling Darling",
    "Spam how are you",
    "Delete Darling",
    "end"])


