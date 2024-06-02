function equalSum(arr){
let result='no';

for(let i=0; i<arr.length; i++){
    let curNum=Number(arr[i])

    let rigthSum=0;
    let leftSum=0;

    for(let j=arr.length-1; j>i; j--){
        rigthSum+=j
    }

    for(let k=0; k<i; k++){
        leftSum+=k
    
    }

    if(rigthSum===leftSum){
        result=i
        
        break;
    }
}
console.log(result);
}
equalSum([1, 2, 3, 3])