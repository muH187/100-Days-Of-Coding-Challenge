// Question 76:
function add(num1:number, num2:number): number {
    return num1 + num2
}
console.log(add(20, 20));
console.log(add(18, 32));
console.log(add(10, 50));

// Question 77:
function greet(name: string = "Anonymous") {
    console.log("Hi! How are you", name);
}
greet()
greet("Ali")

// Question 78:
function squareDeclaration(number: number): number {
    return number * number
}
const squareExpression = function(number: number): number {
    return number * number
}

console.log(squareDeclaration(8));
console.log(squareExpression(9));
