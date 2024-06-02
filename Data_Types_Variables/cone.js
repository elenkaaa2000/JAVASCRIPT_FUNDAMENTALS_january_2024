function cone(radius, heigth){

let volume=(Math.PI*Math.pow(radius,2)*heigth)/3
console.log(`volume = ${volume.toFixed(4)}`);

let B=Math.PI*Math.pow(radius,2) //lice na osnova;
let l=Math.sqrt((Math.pow(heigth,2))+(Math.pow(radius,2)));
let S=Math.PI*radius*l;
let area=B+S
console.log(`area = ${area.toFixed(4)}`);
}
cone(3,5)