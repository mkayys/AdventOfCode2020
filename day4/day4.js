const fs = require('fs');

const data = fs.readFileSync('./day4_mish.txt', { encoding: 'utf8' });

// PART 1

function cheatValidPassport(data) {
    let lines = data.split("\n");
    // console.log(lines[2] === '');
    let batches = [];
    let valid = 0;
    let necessary = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
    for(let i = 0; i < lines.length; i++) {
        if (lines[i] === '') {
            batches = batches.join("");
            // console.log(batches);
            let answer = necessary.every(check => {
                return batches.includes(check);
            })
            if (answer) valid += 1;
            batches = [];
        } else {
            batches.push(lines[i]);
        }
    }
    // console.log(batches);
    return valid;
}

console.log(cheatValidPassport(data));