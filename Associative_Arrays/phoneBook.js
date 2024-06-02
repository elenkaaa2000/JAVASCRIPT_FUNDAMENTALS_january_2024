function phoneBook(input) {
    let phoneBook = {};

    input.forEach(personInfo => {
        let [name, number] = personInfo.split(' ');

        phoneBook[name] = number
    });

Object.entries(phoneBook).forEach(info => console.log(`${info[0]} -> ${info[1]}`));

}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
)