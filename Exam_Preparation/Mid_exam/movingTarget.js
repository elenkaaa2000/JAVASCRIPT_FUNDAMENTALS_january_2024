function movingTarget(input) {
    let targets = input.shift().split(' ').map(Number);
    let command = input.shift();

    while (command !== 'End') {
        let [action, index, value] = command.split(' ');

        index = Number(index);
        value = Number(value);

        switch (action) {
            case 'Shoot':
                if (index >= 0 && index < targets.length) {
                    targets[index] -= value;
                    if (targets[index] <= 0) {
                        targets.splice(index, 1)
                    }
                }
                break;

            case 'Add':
                if (index >= 0 && index < targets.length) {
                    targets.splice(index, 0, value)
                } else {
                    console.log("Invalid placement!");
                }
                break;

            case 'Strike':
                if (index - value >= 0 && index + value < targets.length) {
                    targets.splice(index - value, value * 2 + 1);
                } else {
                    console.log("Strike missed!");
                }
        }

        command = input.shift()
    }
    console.log(targets.join('|'));
}
movingTarget((["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"])
)