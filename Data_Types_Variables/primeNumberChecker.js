function primeNumberChecker(number){
    isPrime=0;
if(number===1){
    console.log('true');
} else if(number===2){
    console.log('false');
} else{
    for(let index=2; index<number; index++){
        if(number%index===0){
            isPrime=false;
            break;
        } else{
            isPrime=true;
            break;
        }
    }
    if(isPrime){
        console.log('true');
    } else{
        console.log('false');
    }
}
}
primeNumberChecker(81)