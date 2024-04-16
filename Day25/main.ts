// Question 73:
function updateVarible() {
    let number = 10
    console.log("Initial Value is: ", number);

    number = 20
    console.log("Final Value is: ", number);
}
updateVarible()

// Question 74:
function swapVariable() {
    let a = 30, b = 50
    console.log("Before swapping:", "a = ", a, ", b = ", b);
    
    let temp = a
    a = b
    b = temp
    console.log("After swapping:", "a = ", a, "b = ", b)
}
swapVariable()