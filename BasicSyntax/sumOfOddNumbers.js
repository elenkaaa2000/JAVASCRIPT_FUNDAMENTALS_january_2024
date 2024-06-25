function sumOfOddNumbers(n){

let currentNumber=n;
let sum=0;

let currentValue=1;
let numberCounter=0;

while(numberCounter !== currentNumber){

    if(currentValue % 2 !==0){
        console.log(currentValue);
        numberCounter++
        sum+=currentValue
    }

    currentValue++
}
console.log(`Sum: ${sum}`);







}
sumOfOddNumbers(5)
//sumOfOddNumbers(3)