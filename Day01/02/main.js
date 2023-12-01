// Read data from the file one line at a time

var fs = require('fs');
var path = require('path');

var filePath = path.join(__dirname, '../input');

const possibleDigits = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

const writtenDigits = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

function removeWrittenDigits(line) {
    let result = line;

    writtenDigits.forEach((digit, index) => {
        const regex = new RegExp(digit, 'g');
        result = result.replace(regex, match => {
            return match.charAt(match[0]) + possibleDigits[index] + match.charAt(match.length - 1);
        });
    });

    return result.replace(/\D/g, '');
}


function getLineValue(line) {
    line = removeWrittenDigits(line).split('')
    const first = line[0];
    const last = line.reverse()[0];

    return Number(String(first) + String(last));
}

function calculateTotal(err, data) {
    var total = 0
    if (err) {
        console.log('Error: ', err);
        return;
    }

    var lines = data.toString().split('\n');
    lines.forEach(function (line) {
        total += getLineValue(line);
    });
    console.log(total)
}

function main() {
    fs.readFile(filePath, calculateTotal)
}

main();