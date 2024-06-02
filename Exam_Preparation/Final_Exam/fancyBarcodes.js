function fancyBarcodes(input) {
    let barcodeCount = Number(input.shift());

    for (let i = 0; i < barcodeCount; i++) {
        let currentBarcode = input.shift()
        let pattern = /(@#+)([A-Z][A-Za-z0-9]{5,})(@#+)/gm
        code = '';
        if (pattern.test(currentBarcode)) {
            let digitPattern = /\d/g;
            code = currentBarcode.match(digitPattern);
            if (code === null) {
                console.log(`Product group: 00`);
            } else {
                console.log(`Product group: ${code.join('')}`);
            }

        } else {
            console.log('Invalid barcode')
        }

    }

}

fancyBarcodes(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"])
