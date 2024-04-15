// Question 55:
let numbers = [1, 2, 3, 4, 5, 6, 7]
let doubleNumbers = numbers.map(number => number * 2)
console.log(doubleNumbers);

// Question 56:
let mixedArray = [1, 3, "Apple", false, "Phone", 8, "Bottle", true, 5, "TypeScript"]
let stringArray = mixedArray.filter(item => typeof item === "string")
console.log(stringArray);
