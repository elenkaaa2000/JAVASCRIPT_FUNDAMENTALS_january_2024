function sortNumbers(a, b, c) {

    if (a >= b && b >= c ) {
        console.log(a);
        console.log(b);
        console.log(c);
    } else if (a >= b && b <= c && a>=c) {
        console.log(a);
        console.log(c);
        console.log(b);
    } else if(b>=a && a>=c){
        console.log(b);
        console.log(a);
        console.log(c);
    } else if(b>=a && a<=c && b>=c){
        console.log(b);
        console.log(c);
        console.log(a);
    } else if(c>=a && a>=b){
        console.log(c);
        console.log(a);
        console.log(b);
    } else if(c>=a && a<=b ){
        console.log(c);
        console.log(b);
        console.log(a);
    }

}
sortNumbers(0,0,2);
