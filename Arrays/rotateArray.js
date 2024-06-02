function rototaArray(arr){


let lastElement=arr.pop()

for(let i=1; i<=lastElement; i++){
let curEl=arr.pop()
arr.unshift(curEl)
}

console.log(arr.join(' '));
}
rototaArray(['1', '2', '3', '4', '3'])