"use strict";
//Returntype<F>
//Parameters<F>
//InstanceType<Ctor>
//ConstructorParameters
function ExtractUserInfo(id, IsExtraInfo = false) {
    return {
        id,
        name: 'Dicky',
        log: IsExtraInfo ? "details" : undefined
    };
}
const argsInfo = ["u1", true];
const resultInfo = ExtractUserInfo(...argsInfo);
class PersonN1 {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hi i am this -> ${this.name}`;
    }
}
const resultInfo1 = ["Dicky", 23];
const abc = new PersonN1(...resultInfo1);
console.log(abc.greet());
