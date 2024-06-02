function arrayModifier(arr){
let currentArray=arr.shift().split(' ');

for(let i=0; i<arr.length; i++){
    let curEl=arr[i].split(' ');
    let command=curEl[0];
    let firstIndex=curEl[1];
    let secondIndex=curEl[2];

    if(command === 'end'){
        break;
    } else if(command === 'swap'){
        let swap=currentArray[firstIndex]
        currentArray[firstIndex]=currentArray[secondIndex]
        currentArray[secondIndex]=swap
    } else if(command === 'multiply'){
        let multiply=currentArray[firstIndex] * currentArray[secondIndex]
        currentArray[firstIndex]=multiply
    } else if(command === 'decrease'){
       
       for(let index=0; index<currentArray.length; index++){
            currentArray[index]-=1
        }

    
}
console.log(currentArray.join(' '));
}

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'])