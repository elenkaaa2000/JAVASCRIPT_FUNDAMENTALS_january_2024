function blackFlag(input) {
    let days = Number(input.shift());
    let plunderPerDay = Number(input.shift());
    let target = Number(input.shift());;
    let total = 0;

    for (let i = 1; i <= days; i++) {
        total += plunderPerDay;

        if (i % 3 === 0) {
            let addPlunder = plunderPerDay * 0.50;
            total += addPlunder
        }

        if (i % 5 === 0) {
            let lostPlunder = total * 0.30;
            total -= lostPlunder
        }
    }
    if (target <= total) {
        console.log(`Ahoy! ${total.toFixed(2)} plunder gained.`);
    } else {
        let percentage = total / target * 100
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }

}
blackFlag(["10",
    "20",
    "380"])
