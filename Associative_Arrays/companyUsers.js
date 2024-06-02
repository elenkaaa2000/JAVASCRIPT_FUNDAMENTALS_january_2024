function companyUsers(input) {
    let users = {};

    for (let companyInfo of input) {
        let [name, user] = companyInfo.split(' -> ');

        if (name in users) {
            if (!users[name].includes(user)) {
                users[name].push(user)
            }
        } else {
            users[name] = [user]
        }
    }

    let entries = Object.entries(users).sort()

    for (let [company, users] of entries) {
        console.log(company);

        for (let user of users) {
            console.log(`-- ${user}`);
        }
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
])
