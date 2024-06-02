function softUniReception(input) {
    let employeeOne = Number(input.shift());
    let employeeTwo = Number(input.shift());
    let employeeThree = Number(input.shift());
    let studentsCount = Number(input.shift());

    let employeeTotal = employeeOne + employeeTwo + employeeThree;
    let count = 0;
    while (studentsCount > 0) {
        studentsCount -= employeeTotal;
        count++;

        if (count % 4 === 0) {
            count++
        }
    }
    console.log(`Time needed: ${count}h.`);
}
softUniReception(['1', '2', '3', '45'])