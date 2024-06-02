function partyTime(input) {
    let vipList = new Set()
    let regularList = new Set()

    let guestNumber = input.shift()
    while (guestNumber !== 'PARTY') {
        let isVip = !isNaN(guestNumber[0])

        if (isVip) {
            vipList.add(guestNumber)
        } else {
            regularList.add(guestNumber)
        }

        guestNumber = input.shift()
    }

    let arrivedList = new Set();
    for (let arrivedGuest of input) {
        if (vipList.has(arrivedGuest)) {
            vipList.delete(arrivedGuest)
        } else if (regularList.has(arrivedGuest)) {
            regularList.delete(arrivedGuest)
        }

        arrivedList.add(arrivedGuest)
    }

    let notArrivedVip = Array.from(vipList).sort();
    let notArrivedReg = Array.from(regularList).sort();

    console.log(notArrivedReg.length + notArrivedVip.length);
    console.log(notArrivedVip.join('\n'));
    console.log(notArrivedReg.join('\n'));

}
partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]

)