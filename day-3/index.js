const input = require('./input.json').values;

function getZeroedArray(length) {
    let result = [];
    for (let i = 0; i < length; i++) {
        result.push(0);
    }
    return result;
}

function convertBinaryInDecimal(binary) {
    let result = 0, chars = binary.split('').reverse();
    for (let i=chars.length-1; i >= 0; i--) {
        if (chars[i] == "1") {
            result += Math.pow(2, i);
        }
    }
    return result;
}

function getOneFrequency() {
    // assuming every input value has the same length
    let gammaRateCountsForOne = getZeroedArray(input[0].length);
    for (let row = 0; row < input.length; row++) {
        let chars = input[row].split('');
        for (let i = 0; i < chars.length; i++) {
            let char = chars[i];
            if (char == "1") {
                gammaRateCountsForOne[i]++;
            }
        }
    }
    return gammaRateCountsForOne;
}

function getGammaRateInBinaryFromOneFrequency(oneFrequency) {
    let result = "", halfRequired = input.length / 2;
    for (let i = 0; i < oneFrequency.length; i++) {
        if (oneFrequency[i] > halfRequired) {
            result += "1";
        } else {
            result += "0";
        }
    }
    return result;
}

function partOne() {
    let oneFrequency = getOneFrequency();
    let gammaRateInBinary = oneFrequency.map((v) => v > input.length / 2 ? "1" : "0").join('');
    let epsilionRateInBinary = gammaRateInBinary.split('').map((v) => v == "1" ? "0" : "1").join('');
    return convertBinaryInDecimal(gammaRateInBinary) * convertBinaryInDecimal(epsilionRateInBinary);
}

console.log(`Part One: ${partOne()}`);