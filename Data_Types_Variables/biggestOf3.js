function biggestOf3(par1,par2,par3){
let maxNum=Number.MIN_SAFE_INTEGER

if(par1>maxNum){
    maxNum=par1
}
if(par2>maxNum){
    maxNum=par2
}
if(par3>maxNum){
    maxNum=par3
}
console.log(maxNum);

}
biggestOf3(43,43.2,43.1)