function solution(commands) {
    let count = 0;
    let facing = 0;
    for (let i = 0; i < commands.length; i++) {
        if (commands[i] === 'L') {
            facing--;
        } else if (commands[i] === 'R') {
            facing++;
        } else {
            facing += 2;
        }
        if (facing % 2 === 0) {
            count++;
        }
    }
    return count;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test lineup

// alternative solution
