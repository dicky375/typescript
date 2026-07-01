"use strict";
function greetPersonOptional(name) {
    const upperRes = name?.toLocaleUpperCase();
    return `Hello ${upperRes}`;
}
console.log(greetPersonOptional('Sangam'));
console.log(greetPersonOptional());
