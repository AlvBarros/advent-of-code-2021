const input = require('./input.json').values;

function partOne() {
    let numIncreased = 0;
    for (let index = 1; index < input.length; index++) { // O(n-1)
        if (input[index] > input[index - 1]) {
            numIncreased++;
        }
    }
    return numIncreased;
}

function partTwo() {
    let numIncreased = 0;
    for (let index = 3; index < input.length; index++) { // O(n-3)
        let previousWindow = input[index-3] + input[index-2] + input[index-1];
        let currentWindow = input[index-2] + input[index-1] + input[index];
        if (currentWindow > previousWindow) {
            numIncreased++;
        }
    }
    return numIncreased;
}

console.log(`Part One: ${partOne()}`);
console.log(`Part Two: ${partTwo()}`);