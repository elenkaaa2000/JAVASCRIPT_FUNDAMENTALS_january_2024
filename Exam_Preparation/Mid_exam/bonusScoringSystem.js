function bonusScoringSystem(input){
let studentsCount=Number(input.shift());
let lecturesCount=Number(input.shift());
let addBonus=Number(input.shift()); 
let totalBonus=0;
let maxBonus=Number.MIN_SAFE_INTEGER
let maxStudent=Number.MIN_SAFE_INTEGER

for(let index=1; index<=studentsCount; index++){
    let studentAttendance=Number(input.shift());
    totalBonus=(studentAttendance/lecturesCount*(5+addBonus));
    if(totalBonus>maxBonus){
        maxBonus=totalBonus
    }

    if(studentAttendance>maxStudent){
        maxStudent=studentAttendance
    }
    
}
console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
console.log(`The student has attended ${maxStudent} lectures.`);
}
bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ]
  
  )