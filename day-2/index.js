const input = require('./input.json').values;

function translateCommandPartOne(command) { // ex: "forward 10"
    /*
        forward X increases the horizontal position by X units.
        down X increases the depth by X units.
        up X decreases the depth by X units.
    */
    const rulesPartOne = {
        "forward": { "axis": 0, "direction": 1 },
        "down": { "axis": 1, "direction": 1 },
        "up": { "axis": 1, "direction": -1 }
    }
    let commandArray = command.split(' ');
    let rule = rulesPartOne[commandArray[0]];
    return [rule.axis, parseInt(commandArray[1]) * rule.direction];
}

function partOne() {
    const partOneInput = input.map(translateCommandPartOne);
    let pos = [
        0,  // horizontal
        0   // depth
    ];
    for (let index = 0; index < input.length; index++) {
        pos[partOneInput[index][0]] += partOneInput[index][1];
    }
    return pos[0] * pos[1];
}

function translateCommandPartTwo(command) {
    /*
        down X increases your aim by X units.
        up X decreases your aim by X units.
        forward X does two things:
            - It increases your horizontal position by X units.
            - It increases your depth by your aim multiplied by X.
    */
    const rulesPartTwo = {
        "forward": { "axis": 0 },
        "down": { "axis": 1, "direction": 1 },
        "up": { "axis": 1, "direction": -1 },
    }
    let commandArray = command.split(' ');
    let rule = rulesPartTwo[commandArray[0]];
    let result = [rule.axis];
    if (rule.axis == 0) {
        result.push(parseInt(commandArray[1]));
    } else {
        result.push(parseInt(commandArray[1]) * rule.direction);
    }
    return result;
}

function partTwo() {
    const partTwoInput = input.map(translateCommandPartTwo);
    let pos = [
        0,  // horizontal
        0,  // depth
        0   // aim
    ];
    for (let index = 0; index < partTwoInput.length; index++) {
        if (partTwoInput[index][0] == 0) {
            pos[0] += partTwoInput[index][1];           // increases horizontal position by X units
            pos[1] += pos[2] * partTwoInput[index][1];  // increases depth by aim multiplied by X
        } else {
            pos[2] += partTwoInput[index][1];           // increases/decreases aim
        }
    }
    return pos[0] * pos[1];
}

console.log(`Part One: ${partOne()}`);
console.log(`Part Two: ${partTwo()}`);