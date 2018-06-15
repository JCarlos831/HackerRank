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
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the diagonalDifference function below.
function diagonalDifference(a) {
    let array1 = [];
    let array2 = [];
    for(let i = 0, j = 0; i < a.length; i++, j++){
        array1.push(a[i][j]);
    }
    
    for(let k = 0, l = a.length-1; k < a.length; k++, l--){
        array2.push(a[k][l]);
    }

    let diag1 = array1.reduce(function(acc, cv){
        return acc + cv;
    });
    let diag2 = array2.reduce(function(acc, cv){
        return acc + cv;
    });
    return Math.abs(diag1 - diag2);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let a = Array(n);

    for (let i = 0; i < n; i++) {
        a[i] = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));
    }

    let result = diagonalDifference(a);

    ws.write(result + "\n");

    ws.end();
}