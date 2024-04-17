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

// Question 93:
function replaceBananaWithMango(str: string[]): void {
    const index = str.indexOf("Banana")
    if( index !== -1) str[index] = 'Mango'
}
const str: string[] = ["Strawberry", "Grapes", "Banana"]
replaceBananaWithMango(str)
console.log(str);
