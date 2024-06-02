function negativeOrPositiveNumbers(arr) {
    let newArr = [];

    for(let i=0; i<arr.length; i++){
        let curEl=Number(arr[i]);
        if(curEl<0){
            newArr.unshift(curEl)
        } else if(curEl>=0){
            newArr.push(curEl)
        }
    }
    console.log(newArr.join('\n'));
}
negativeOrPositiveNumbers(['3', '-2', '0', '-1'])