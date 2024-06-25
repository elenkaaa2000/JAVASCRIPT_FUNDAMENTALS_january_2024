function printAndSum(start,end){
let sum=0;
let buff="";
    for(let a=start; a<=end; a++){
        buff+=a + " "
        sum+=a
       
    }
    console.log(buff);
    console.log(`Sum: ${sum}`);


}
printAndSum(5,10);
//printAndSum(0,26);
//printAndSum(50,60);