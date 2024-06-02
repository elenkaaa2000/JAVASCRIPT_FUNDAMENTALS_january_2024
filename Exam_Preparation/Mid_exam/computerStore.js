function computerStore(arr) {
    let price = 0;
    let tax = 0;
    for (let element of arr) {
        if (element === 'special' || element === 'regular') {
            break;
        } else if (Number(element) < 0) {
            console.log("Invalid price!");
        } else {
            let curPrice = Number(element)
            let taxPerPrice = curPrice * 0.20
            tax += taxPerPrice
            price += curPrice
        }


    }
    let totalPrice = price + tax


    if (arr[arr.length - 1] === 'special') {
        let discount = totalPrice * 0.10
        totalPrice = totalPrice - discount
    }

    if (price === 0) {
        console.log('Invalid order!');
    } else {
        console.log(`Congratulations you've just bought a new computer!`);
    console.log(`Price without taxes: ${price.toFixed(2)}$`);
    console.log(`Taxes: ${tax.toFixed(2)}$`);
    console.log(`-----------`);
    console.log(`Total price: ${(totalPrice).toFixed(2)}$`);
    }
}
computerStore([
    'regular'
])


