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

// Question 75:
function useCompound() {
    let x = 4
    console.log("Initial Value of x: ", x);
    
    x += 6
    console.log("Adding 6 to x: ", x);
    
    x -= 3
    console.log("Subtracting 3 to x: ", x);

    x *= 5
    console.log("Multiply by 5 to x: ", x);

    x /= 2
    console.log("Divide by 2 to x: ", x);
}
useCompound()