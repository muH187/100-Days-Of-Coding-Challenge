// Type Annotations With Functions:
function sum(num1: number, num2: number, num3: number): number {
    return num1 + num2 + num3 / 3
}
console.log(sum(20, 50, 40))

// Optional And Default Parameters:
function greetGuest(name: string, age?: number) {
    if(age !== undefined) {
        console.log(`Hello! ${name}. You are ${age} years old.`)
    } else {
        console.log(`Hello! ${name}`)
    }
}
greetGuest("Ali", 19)
greetGuest("Mirza")

// Rest Paramters:
function addAll(...nums: number[]): number {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
      result += nums[i];
    }
    return result;
  }
  
  console.log(addAll(10, 20, 30, 100, 10.5, +true))

// Anonymous Functoin:
const add = function (add1: number, add2: number): number {
    return add1 + add2 
}
console.log(add(10, 90))

// Void Function:
function greet(name: string): void {
    console.log(`Hello! ${name}`)
}
greet("Ali")