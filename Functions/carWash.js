function carWash(arr){
    let value=0;

    let soap=x=>x+10;
    let water=x=>x+x*0.20;
    let vacuum=x=>x+x*0.25;
    let mud=x=>x-x*0.10;
for(let i=0; i<arr.length; i++){
    let curCommand=arr[i];
    switch(curCommand){
        case 'soap': value=soap(value);break;
        case 'water': value=water(value);break;
        case 'vacuum cleaner':value=vacuum(value);break;
        case 'mud': value=mud(value);break;

    }
}
console.log(`The car is ${value.toFixed(2)}% clean.`);
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])