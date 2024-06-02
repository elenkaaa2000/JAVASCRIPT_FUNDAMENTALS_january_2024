function arrayRotation(arr,rotation){

    for(let curR=1; curR<=rotation; curR++){
        let firstElement=arr.shift()
        arr.push(firstElement)
    }
    console.log(arr.join(' '));
}
arrayRotation([2, 4, 15, 31], 5)