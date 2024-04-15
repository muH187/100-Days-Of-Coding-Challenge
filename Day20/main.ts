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

// Question 60:
let userProfile = function () {
    let name = "Muhammad Ali"
    let age = 19
    return {
        displayInfo: function() {
            console.log(`Name: ${name} and Age: ${age}`);
        }
    }
}()
userProfile.displayInfo()