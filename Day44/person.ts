export class Person {
    name: string
    constructor(name: string) {
        this.name = name
    }
    greet() {
        console.log(`Hello, This is ${this.name}`);
    }
}