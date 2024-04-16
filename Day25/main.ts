// Question 70:
function countDown() {
    for(let i = 0; i < 6; i++) {
        console.log(i);
    }
}
countDown()

// Question 71:
let age = 19
age = 20
console.log(age);

const name = "Ali"
try {
    name = "Alee"
} catch (error) {
    console.log("Error: Can't reassign a 'const'-declared variable.");
}
