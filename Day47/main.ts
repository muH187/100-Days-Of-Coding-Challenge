// Question 139:

// const is reserve variable:
const country = "Pakistan"
// The word if and return is also a reserve keywords in JS or TS.
let number:number = 5
if (number > 3) {
    console.log(true)
}

// Question 140:
// let if = 5
console.log("This line will cause a syntax error. Because, you can't use reserve keyword as variable.");

// Question 141:
async function fechData() {
    const data = await fetchSomething()
    console.log(data)
}