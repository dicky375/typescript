// goal ->  understand when to let Typescript infer types
// ts -> js very well 
// when ts will write the types / ur going to write
let count = 0; // ts sees number
const site = "acadevhub"; // sees the exact literal "acadevhub"
const scores = [10, 20, 30];
//over innotation isn't bad -> just noisy 
export function add(a, b) {
    return a + b;
}
console.log(add(5, 2));
// you should also annotate when the type is not obvious
let maybe;
maybe = Math.random() > 0.5 ? "test" : 10;
