function piccolo(input) {
    /*let resultArray = []
    for (let carInfo of input) {
        let [act, number] = carInfo.split(', ');

        if (act === 'IN') {
            resultArray.push(number)
        } else {
            let index = resultArray.indexOf(number);
            resultArray.splice(index, 1)
        }
    }
    if (resultArray.length === 0) {
        console.log(`Parking Lot is Empty`);
    } else {
        let sorted = resultArray.sort((a, b) => a - b || a.localeCompare(b));
        console.log(sorted.join('\n'));

    }*/


    let obj = {};

    obj = input.reduce((acc, curr) => {
        let [command, number] = curr.split(', ');

        if (acc.hasOwnProperty(number)) {
            if (command === 'OUT') {
                acc[number] = 'out'
            } else {
                acc[number] = 'parked'
            }
        } else {
            if (command === 'IN') {
                acc[number] = 'parked'
            }
        }
        return acc;
    }, {})

    obj = Object.entries(obj).filter(([number, status]) => {
        if (status === 'parked') {
            return number;
        }
    }).map(el => el[0]).sort((a, b) => a.localeCompare(b))

    if (obj.length > 0) {
        console.log(obj.join('\n'));
    } else {
        console.log(`Parking Lot is Empty!`);
    }
}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
)