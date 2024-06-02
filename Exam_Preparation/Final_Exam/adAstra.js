function adAstra(input) {
    let pattern = /([|#])(?<name>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/gm;
    let foodArray = [];
    let foodInfo;
    let totalSumCalories = 0;

    while ((foodInfo = pattern.exec(input)) !== null) {
        let calories = foodInfo.groups['calories'];
        totalSumCalories += Number(calories);

        foodArray.push({ item: foodInfo[2], date: foodInfo[3], cal: foodInfo[4] })
    }
    let totalDays = Math.trunc(totalSumCalories / 2000);
    console.log(`You have food to last you for: ${totalDays} days!`);

    for (let food of foodArray) {
        console.log(`Item: ${food.item}, Best before: ${food.date}, Nutrition: ${food.cal}`);
    }

}
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@'])