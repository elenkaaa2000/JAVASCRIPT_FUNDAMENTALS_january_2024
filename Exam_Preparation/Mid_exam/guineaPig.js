function guineaPig(input) {
    let quantity = Number(input[0]) * 1000;
    let hay = Number(input[1]) * 1000;
    let cover = Number(input[2]) * 1000;
    let weight = Number(input[3]) * 1000;
let isOver=false;
    let dayCounter = 0;
    for (let i = 1; i <= 30; i++) {
        quantity -= 300;
        dayCounter++

        if (dayCounter % 2 === 0) {
            let neededHay = quantity * 0.05
            hay -= neededHay
        }

        if (dayCounter % 3 === 0) {
            let neededCover = weight * 1 / 3
            cover -= neededCover
        }

        if (cover === 0 || hay === 0 || quantity === 0) {
            isOver=true
            break;
        }
    }
    if(isOver===true){
        console.log('Merry must go to the pet store!');
    }else{
    console.log(`Everything is fine! Puppy is happy! Food: ${(quantity / 1000).toFixed(2)}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`);
    }
}
guineaPig((["1", 
"1.5", 
"3", 
"1.5"])
)
