// Read data from the file one line at a time

var fs = require('fs');
var path = require('path');

var filePath = path.join(__dirname, '../input');

const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function getLineValue(line) {
    line = line.split('')
    const first = line.find((digit) => digits.includes(digit));
    const last = line.reverse().find((digit) => digits.includes(digit));

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
        console.log(total)
    });
    console.log(total)
}

function main() {
    fs.readFile(filePath, calculateTotal)
}

main();