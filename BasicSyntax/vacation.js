function vacation(groupOfPeople, typeOfTheGroup, dayOfTheWeek) {
    let pricePerPerson = 0;

    switch (dayOfTheWeek) {
        case 'Friday':
            if (typeOfTheGroup === 'Students') {
                pricePerPerson = 8.45
            } else if (typeOfTheGroup === 'Business') {
                pricePerPerson = 10.90
            } else {
                pricePerPerson = 15
            }; break;
        case 'Saturday':
            if (typeOfTheGroup === 'Students') {
                pricePerPerson = 9.80
            } else if (typeOfTheGroup === 'Business') {
                pricePerPerson = 15.60
            } else {
                pricePerPerson = 20
            }; break;
        case 'Sunday':
            if (typeOfTheGroup === 'Students') {
                pricePerPerson = 10.46
            } else if (typeOfTheGroup === 'Business') {
                pricePerPerson = 16
            } else {
                pricePerPerson = 22.50
            }; break;
    }
    let totalSum = groupOfPeople * pricePerPerson

    if (typeOfTheGroup === 'Students' && groupOfPeople >= 30) {
        totalSum = totalSum - totalSum * 0.15
    }

    let discount = 0;
    if (typeOfTheGroup === "Business" && groupOfPeople >= 100) {
        discount = 10 * pricePerPerson
        totalSum = totalSum - discount
    }

    if (typeOfTheGroup === 'Regular' && groupOfPeople >= 10 && groupOfPeople <= 20) {
        totalSum = totalSum - totalSum * 0.05
    }

    console.log(`Total price: ${totalSum.toFixed(2)}`);


}
vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday")