function schoolGrades(input) {
    let grades = {};

    input.forEach(gradeInfo => {
        gradeInfo = gradeInfo.split(' ');
        let student = gradeInfo.shift();
        let grade = gradeInfo.join(' ')

        if (!grades.hasOwnProperty(student)) {
            grades[student] = grade
        } else {
            grades[student] += ` ${grade}`
        }

    });

    let sortedNames = Object.keys(grades).sort((a, b) => a.localeCompare(b));

    for (let name of sortedNames) {
        let average = 0;
        let counter = 0;

        for (let grade of grades[name].split(' ')) {
            average += Number(grade);
            counter++
        }

        average /= counter;

        console.log(`${name}: ${average.toFixed(2)}`);
    }

}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
)