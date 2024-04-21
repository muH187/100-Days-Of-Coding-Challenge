// Question 136:
for ( let i = 1; i <= 5; i++ ) {
    console.log(`Iteration: ${i}, i value, i`)
}

// Question 137:
try {
    throw new Error("Something went wrong.")
} catch (error) {
    console.log(error.message)
}

// Question 138:
console.log("Before Break Point.");
console.log(
    "This line has a breakpoint set on it in the browser's developer tools"
);
console.log("After Break Point.");