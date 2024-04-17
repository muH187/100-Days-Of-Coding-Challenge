// Question 94:
const words: string[] = ["TypeScript", "Python", "C++", "Java", "Programming", "Software"]
const lengths: number[] = words.map(word => word.length)
console.log(lengths);

// Question 95:
function greaterThanTen(number: number[]): number[] {
    return number.filter(numbers => numbers > 10)
}
let counting: number[] = [2, 3, 4, 13, 66, 32, 2, 9, 10, 43, 13, 54, 7]
console.log(greaterThanTen(counting));

// Question 96:
function sumOfAll(array: number[]): number {
    return array.reduce((accumulator, current) => accumulator + current, 0)
}
const array: number[] = [5, 20, 50, 3, 2, 10, 8, 1, 1]
console.log(sumOfAll(array));
