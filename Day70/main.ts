// Interface:
interface person1 {
    name: string
    age: number
}
const Ali: person1 = {
    name: "Ali",
    age: 19
}
console.log(Ali)

// Interface Method And Parameters
interface person2 {
    name: string
    age: number
    greet(message: string): void
}
const Tanzeel: person2 = {
    name: "Tanzeel",
    age: 21,
    greet(message: string) {
        console.log(`${this.name} says: ${message}`)
    }
}
Tanzeel.greet("Hello, Python!")

// Type Alias:
type PersonExType = {
    name: string;
    age: number;
  };interface AnimalExInterface {
    type: string;
  }
  
  interface Dog extends AnimalExInterface {
    bark(): void;
  }
  
  class Labrador implements Dog {
    type: string = "dog";
    bark() {
      console.log("Woof!");
    }
  }