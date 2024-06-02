function heartDelivery(input){
let houses=input.shift().split('@').map(Number);
let command=input.shift();
let houseIndex=0

while(command !=='Love!'){
let length=command.split(' ');
houseIndex+=Number(length[1]);

if(houseIndex>houses.length-1){
    houseIndex=0
}

if(houses[houseIndex] === 0){
    console.log(`Place ${houseIndex} already had Valentine's day.`);
} else {
    houses[houseIndex]=houses[houseIndex] - 2;

    if(houses[houseIndex] === 0){
        console.log(`Place ${houseIndex} has Valentine's day.`);
    }
}
    command=input.shift();
}
console.log(`Cupid's last position was ${houseIndex}.`);

let isSuccess=houses.filter(h => h !== 0)

if(isSuccess.length>0){
    console.log(`Cupid has failed ${isSuccess.length} places.`);
} else {
    console.log(`Mission was successful.`);
}
}
heartDelivery(["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"])
