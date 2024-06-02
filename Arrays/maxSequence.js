function maxSequence(input) {
    let longSeq = [];
    for (let index = 0; index < input.length; index++) {

        let curNum = Number(input[index]);
        let curSequence = [curNum];

        for (let j = index + 1; j < input.length; j++) {

            let nextNum = Number(input[j]);

            if (curNum === nextNum) {
                curSequence.push(nextNum)
            } else {
                break;
            }
        }


        if (curSequence.length > longSeq.length) {
            longSeq = curSequence
        }

    }
    
    console.log(longSeq.join(' '));
}
maxSequence([4, 4, 4, 4])
