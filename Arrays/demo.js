function demo(arr1,arr2){
    let sum=0
for (let element of arr1) {
    if(arr2.includes(element)){
sum+=Number(element)
    } else{
        console.log(element);
    }
}
console.log(sum);
}
demo(['1'], ['10'])