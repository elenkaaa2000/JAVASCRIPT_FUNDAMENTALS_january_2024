function lift(input) {
   let peopleWaiting = Number(input.shift());
   let wagons = input.shift().split(' ').map(Number);

   for (let i = 0; i < wagons.length; i++) {

      let curWagon = wagons[i];

      while (curWagon !== 4) {
         curWagon++
         peopleWaiting--
         if (peopleWaiting === 0) {
            break;
         }
      }
      wagons[i] = curWagon
      if (peopleWaiting === 0) {
         break;
      }


   }

   let isFull = wagons.filter(w => w !== 4);

   if (isFull.length === 0 && peopleWaiting === 0) {
      console.log(wagons.join(' '));
   } else if (isFull.length === 0 && peopleWaiting > 0) {
      console.log(`There isn't enough space! ${peopleWaiting} people in a queue!`);
      console.log(wagons.join(' '));
   } else if (isFull.length !== 0 && peopleWaiting === 0) {
      console.log("The lift has empty spots!");;
      console.log(wagons.join(' '));
   }

}
lift([
   "20",
   "0 2 0"
]
)