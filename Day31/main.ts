// Question 91:
let favoriteFruits: string[] = ["Mango", "Banana", "Watermelon"]
console.log(favoriteFruits)
favoriteFruits.push("Kivi")
console.log(favoriteFruits);

// Question 92:
function removeLastElement<T>(arr: T[]): T | undefined {
    return arr.pop()
}
let fruits = ["Apple", "Cherry", "Grapes"]
console.log(removeLastElement(fruits));
console.log(fruits)