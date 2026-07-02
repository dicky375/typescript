"use strict";
// understand what is type parameter  <T> 
// how typescript infers <T> from your arguments automatically
//is a function where the types are blanks  -> you fill in later
//<T> is a placeholder
//Ts will try to understand what T should be 
function id(x) {
    return x;
}
// infers T
// id(5) -> T is a string
//id<number>(5) 
const xyzz = id(5);
console.log(xyzz + 1, id(['Dicky']));
function firstGen(arr) {
    return arr[0];
}
console.log(firstGen([1, 2, 3, 4, 5]));
// without generic  -> (x: unknown) => unknown
// with generics: (x: T) // keep the exact type 
function wrap(value) {
    return { value };
}
