// Question 28:
let age: number = 19
if( age <= 3) {
    console.log("You are baby");
} else if ( age <= 12) {
    console.log("You are kid");
} else if ( age <= 19) {
    console.log("You are teenager");
} else if ( age <= 29) {
    console.log("You are in your 20s");
} else if ( age <= 59) {
    console.log("You are adult");
} else {
    console.log("You are Senior")
}

// Question 29:
let favorite_fruit: string[] = ["Mango", "Banana", "Kivi", "Watermelon", "Grapes"] 
if ( favorite_fruit.includes("Mango")) {
    console.log("I like Mango");
}
if ( favorite_fruit.includes("Watermelon")) {
    console.log("I like Watermelon");
}