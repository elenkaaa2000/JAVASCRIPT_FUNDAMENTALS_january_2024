function ascii(input) {
    let firstSymbol = input.shift();
    let secondSymbol = input.shift();
    let string = input.shift().split('');

    let firstCode = firstSymbol.charCodeAt();
    let secondCode = secondSymbol.charCodeAt();
    let sum = 0

    let start = Math.min(firstCode,secondCode);
    let end = Math.max(firstCode,secondCode)

    for (let symbol of string) {

        let symbolCode = symbol.charCodeAt();

if(symbolCode>start && symbolCode<end){
    sum+=symbolCode
}
       

    }

    console.log(sum);

}
ascii(['?',
    'E',
    '@ABCEF'])