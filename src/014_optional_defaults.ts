function greetPersonOptional(name?:string): string {
    const upperRes = name?.toLocaleUpperCase();

    return `Hello ${upperRes}`;
}

console.log(greetPersonOptional('Sangam'));
console.log(greetPersonOptional());