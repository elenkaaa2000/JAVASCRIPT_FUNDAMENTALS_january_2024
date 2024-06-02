function passwordReset(input) {
    let password = input.shift();
    let newPass = '';
    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(' ');
        if (tokens[0] === 'Done') {
            break;
        }
        let action = tokens[0];
        if (action === 'TakeOdd') {
            for (let i = 0; i < password.length; i++) {
                let curDigit = password[i];
                if (i % 2 !== 0) {
                    newPass += curDigit
                }
            }
            console.log(newPass);
        } else if (action === 'Cut') {
            let index = Number(tokens[1]);
            let length = Number(tokens[2]);
            let cuttedPartIndex = index + length;

            newPass = newPass.substring(0, index) + newPass.substring(cuttedPartIndex,);
            console.log(newPass);
        } else if (action === 'Substitute') {
            let substring = tokens[1];
            let string = tokens[2];
            if (newPass.includes(substring)) {
                while(newPass.includes(substring)){
                newPass = newPass.replace(substring, string);
                }
                console.log(newPass);
            } else {
                console.log('Nothing to replace!')
            }
        }
    }
    console.log(`Your password is: ${newPass}`);
}
passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"])
