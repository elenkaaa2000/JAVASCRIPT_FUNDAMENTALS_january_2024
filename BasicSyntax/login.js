function login(input) {

    let username = input.shift()

    let pass = "";

    for (let i = username.length - 1; i >= 0; i--) {
        pass += username[i]
    }

    let guess = input.shift()
    let guessCounter = 0;

    while (guess !== pass) {
        guessCounter++

        if (guessCounter >= 4) {
            console.log(`User ${username} blocked!`);
            return;
        }

        console.log(`Incorrect password. Try again.`);

        guess=input.shift()
    }

    console.log(`User ${username} logged in.`);



}
//login(['Acer', 'login', 'go', 'let me in', 'recA']);
login(['sunny','rainy','cloudy','sunny','not sunny'])