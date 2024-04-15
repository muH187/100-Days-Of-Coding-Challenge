// Question 58:
function avgScore (...scores:number[]): number {
    let total = scores.reduce((total, score) => total + score, 0)
    return total / scores.length
}
console.log(avgScore(100, 50, 150, 500));

// Question 59:
function makeAdder(valueToAdd: number): (number) => number {
    return function (number: number): number{
        return number + valueToAdd
    }
}
let addTwenty = makeAdder(20)
console.log(addTwenty(5));
