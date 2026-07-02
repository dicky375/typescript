"use strict";
function sumAllNumbers(...xs) {
    return xs.reduce((s, n) => s + n, 0);
}
console.log(sumAllNumbers(1, 2, 3, 4, 5));
//Tuple rest 
function makeRange(...args) {
    const [start, end, step = 1] = args;
    const out = [];
    for (let n = start; n <= end; n += step)
        out.push(n);
    return out;
}
console.log(makeRange(1, 10));
function draw(x, y) {
    console.log(x, y);
}
const points = [10, 20];
//draw(...points) // not a fixed [number, number] tuple
const pointsFixed = [10, 20];
draw(...pointsFixed);
