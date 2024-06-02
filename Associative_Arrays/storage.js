function storage(input) {
    let map = new Map;

    for (let productInfo of input) {
        let [product, quantity] = productInfo.split(' ');
        quantity = Number(quantity)
        if (!map.has(product)) {
            map.set(product, +quantity)
        } else {
            let currentQuantity = map.get(product)
            let newQuantity = currentQuantity += quantity;
            map.set(product, newQuantity)
        }
    }
    for (const currentProduct of map) {
        console.log(`${currentProduct[0]} -> ${currentProduct[1]}`);
    }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
)