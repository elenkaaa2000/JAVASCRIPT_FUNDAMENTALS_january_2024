function shoot(input) {
    let targets = input.shift().split(' ').map(Number);

    let command = input.shift();
    let count = 0;

    while (command !== "End") {
        let index = Number(command);

        if (index >= 0 && index < targets.length) {
            for (let i = 0; i < targets.length; i++) {
                let curTarget = targets[index];

                if (i !== index && targets[i] !== -1) {
                    if (targets[i] > curTarget) {
                        targets[i] -= curTarget
                    } else {
                        targets[i] += curTarget

                    }
                }
            }
            targets[index] = -1;
            count++
        }
        command = input.shift()
    }

    console.log(`Shot targets: ${count} -> ${targets.join(' ')}`);
}
shoot((["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"])
)