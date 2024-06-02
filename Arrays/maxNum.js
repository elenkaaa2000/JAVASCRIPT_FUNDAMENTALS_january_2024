function maxNum(input) {
    let topNum = [];

    for (let i = 0; i < input.length; i++) {
        let curNum = Number(input[i]);
        isTop = true;

        for (let j = i + 1; j < input.length; j++) {
            let rigthNum = input[j]
            if (rigthNum >= curNum) {
                isTop = false
                break;
            }

        }
        if (isTop === true) {
            topNum.push(curNum)
        }
    }
    console.log(topNum.join(' '));

}
maxNum([14, 24, 3, 19, 15, 17])