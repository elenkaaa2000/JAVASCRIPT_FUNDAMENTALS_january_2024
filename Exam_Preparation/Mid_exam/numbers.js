function numbers(string){
let sum=0;
let numCounter=0
let arr=string.split(' ');

for(let i=0; i<arr.length; i++){
    let curNum=Number(arr[i])
    numCounter++    
    sum+=curNum
    
    
}
let avrSum=sum/numCounter
let newArr=[];

for(let index=0; index<arr.length; index++){
let numberToCheck=arr[index]
if(numberToCheck>avrSum){
    newArr.push(numberToCheck)
}

}
if(newArr.length > 5 && newArr.length<=10000){
    let lastFive=newArr.splice(newArr.length-5,5)
    lastFive.sort((a,b)=>b-a)
    console.log(lastFive.join(' '));
} else if(newArr.length<=0){
console.log("No");
} else{
    console.log(newArr.sort((a, b) => b-a).join(' '));
}
}
numbers('10 20 30 40 50')