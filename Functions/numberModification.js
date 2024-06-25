function numberModification(num) {

    while (getAvrSum(num) < 5) {
        num += '9'
    }

    console.log(num);

    function getSum(num) {

        let numAsString = num.toString()
        let sum = 0;

        for (let i = 0; i < numAsString.length; i++) {
            sum += Number(numAsString[i])
        }
        return sum;
    }

    function getAvrSum(num) {
        return getSum(num) / num.toString().length
    }

}
numberModification(101);