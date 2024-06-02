function meetings(input) {
    let dayObj = {};
    for (let dayInfo of input) {
        let [day, name] = dayInfo.split(' ');
        if (!dayObj.hasOwnProperty(day)) {
            dayObj[day] = name;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }
    Object.entries(dayObj).forEach(dayInfo => console.log(`${dayInfo[0]} -> ${dayInfo[1]}`));
}
meetings(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George']
)