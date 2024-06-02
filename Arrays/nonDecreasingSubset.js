function nonDecreasingSubset(arr){
let max=arr[0];

    let result=arr.filter(element =>{
        if(element>=max){
            max=element;
        }
        return element>=max
    });
    console.log(result.join(' '));
}
nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24])
