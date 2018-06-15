'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    /*
     * Write your code here.
     */
    
    if (s.includes('PM') && parseInt(s.substring(0,2)) < 12) {
        let time = s.substring(2, s.length-2);
        let hours = (parseInt(s.substring(0,2)) + 12).toString();
        return hours.concat(time);
    } else if (s.includes('PM') && s.substring(0,2) == '12'){
        return s.substring(0, s.length-2);
    } else if (s.includes('AM') && s.substring(0,2) == '12'){
        let time = s.substring(0, s.length-2);
        return time.replace('12', '00');
    } else {
        return s.substring(0, s.length-2);
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}