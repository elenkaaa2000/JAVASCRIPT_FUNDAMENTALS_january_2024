function heroesOfCodeAndLogic(input) {
    let heroesCount = Number(input.shift());
    let heroes = {};

    for (let i = 0; i < heroesCount; i++) {
        let [name, hp, mp] = input.shift().split(' ');
        hp = Number(hp);
        mp = Number(mp);

        heroes[name] = {
            hp: hp,
            mp: mp
        }
    }

    for (let k = 0; k < input.length; k++) {
        let tokens = input[k].split(' - ');

        if (tokens[0] === 'End') {
            break;
        }

        let action = tokens[0];
        let name = tokens[1];

        if (heroes.hasOwnProperty(name)) {
            if (action === 'CastSpell') {
                let mpNeeded = Number(tokens[2]);
                let spellName = tokens[3];
                if (heroes[name]['mp'] >= mpNeeded) {
                    heroes[name]['mp'] -= mpNeeded;
                    console.log(`${name} has successfully cast ${spellName} and now has ${heroes[name]['mp']} MP!`);
                } else {
                    console.log(`${name} does not have enough MP to cast ${spellName}!`);
                }
            } else if (action === 'TakeDamage') {
                let damage = Number(tokens[2]);
                let attacker = tokens[3];

                heroes[name]['hp'] -= damage;

                if (heroes[name]['hp'] > 0) {
                    console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${heroes[name]['hp']} HP left!`);
                } else {
                    delete heroes[name];
                    console.log(`${name} has been killed by ${attacker}!`);
                }
            } else if (action === 'Recharge') {
                let amount = Number(tokens[2]);
                if (heroes[name]['mp'] + amount >= 200) {
                    let increasedAmount = 200 - heroes[name]['mp'];
                    heroes[name]['mp'] = 200;
                    console.log(`${name} recharged for ${increasedAmount} MP!`);
                } else {
                    heroes[name]['mp'] += amount;
                    console.log(`${name} recharged for ${amount} MP!`);
                }
            } else if (action === 'Heal') {
                let amount = Number(tokens[2]);
                if (heroes[name]['hp'] + amount >= 100) {
                    let increasedAmount = 100 - heroes[name]['hp'];
                    heroes[name]['hp'] = 100;
                    console.log(`${name} healed for ${increasedAmount} HP!`);
                } else {
                    heroes[name]['hp'] += amount;
                    console.log(`${name} healed for ${amount} HP!`);
                }
            }
        }
    }
    let heroesArray = Object.entries(heroes);

    for (let [name, info] of heroesArray) {
        console.log(name);
        console.log(`  HP: ${info.hp}`);
        console.log(`  MP: ${info.mp}`);
    }
}
heroesOfCodeAndLogic([
    "2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"
]
)