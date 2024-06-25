function pointsValidation(arr) {
    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];

    let checkFirst = firstPoint(arr)
    let checkSecond = secondPoint(arr)
    let checkThird = thirdPoint(arr)

    if (checkFirst === Math.trunc(checkFirst)) {
        console.log(`{${x1}, ${y1}} to {${0}, ${0}} is valid`);
    }
    else {
        console.log(`{${x1}, ${y1}} to {${0}, ${0} is invalid`);
    }

    if (checkSecond === Math.trunc(checkSecond)) {
        console.log(`{${x2}, ${y2}} to {${0}, ${0}} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {${0}, ${0}} is invalid`);
    }

    if (checkThird === Math.trunc(checkThird)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

    function firstPoint() {
        return Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
    }

    function secondPoint() {
        return Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2))
    }

    function thirdPoint() {
        let checkThree = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    }


}
//pointsValidation([3, 0, 0, 4])
pointsValidation([2, 1, 1, 1])