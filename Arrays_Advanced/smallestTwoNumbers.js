function smallestTwoNumbers(arr){

let result=arr.sort((a,b)=>{
    return a-b
})
.slice(0,2);
console.log(result.join(' '));

}
smallestTwoNumbers([30, 15, 50, 5])