function addressBook(input) {
    let personInfo = {};

    input.forEach(adressInfo => {
        let [name, adress] = adressInfo.split(':');

        personInfo[name] = adress
    });

    let sortedInfo = Object.entries(personInfo).sort((a, b) => a[0].localeCompare(b[0]));

    sortedInfo.forEach(el => console.log(`${el[0]} -> ${el[1]}`));
}


addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']
)