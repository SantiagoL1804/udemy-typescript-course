"use strict";
const employee = {
    name: "Santi",
    privileges: ["Delete users"],
    startDate: new Date(),
};
let addFn = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(n) {
        this.n = n;
        this.age = 28;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(`${phrase} ${this.name}`);
        }
        else {
            console.log(`Holis`);
        }
    }
}
let person1 = new Person();
person1.greet("Holis, me llamo");
console.log(person1);
