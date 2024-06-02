function reverseAnArrayOfNumbers(number,array){
   

let newArray=array.slice(0,number);
newArray.reverse()
console.log(newArray.join(" "));


}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])