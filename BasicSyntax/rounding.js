function rounding(a,b){
if(b>15){
    b=15
}
let aFixed=a.toFixed(b)
 console.log(parseFloat(aFixed));   

}
rounding(3.1415926535897932384626433832795,2)
rounding(10.5,3)