function dayOfWeek(num) {

    let dayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if (num < 1 || num > 7) {
        console.log("Invalid day!");
    } else {
        switch (num) {
            case 1: console.log(dayOfWeek[0]); break;
            case 2: console.log(dayOfWeek[1]); break;
            case 3: console.log(dayOfWeek[2]); break;
            case 4: console.log(dayOfWeek[3]); break;
            case 5: console.log(dayOfWeek[4]); break;
            case 6: console.log(dayOfWeek[5]); break;
            case 7: console.log(dayOfWeek[6]); break;
        }
    }
}
dayOfWeek(11)