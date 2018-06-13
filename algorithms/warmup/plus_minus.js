'use strict';

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

// Complete the plusMinus function below.
function plusMinus(arr) {
    let posNum = 0;
    let negNum = 0;
    let zero = 0;
    
    arr.forEach(function(item) {
        if(item > 0) {
            posNum++;
        }
        else if(item < 0) {
            negNum++;
        }
        else {
            zero++;
        }
    });
    console.log((posNum / arr.length)+"\n"+(negNum / arr.length)+"\n"+(zero / arr.length));
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
