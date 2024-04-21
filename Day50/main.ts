// Question 148:
setTimeout(() => {
    console.log("Hello, World! with 3 sec. delay.")
}, 3000);

// Question 149:
console.log("Start Now.")
setTimeout(() => {
    console.log("This will print at the end. Because of setTimeout event.");
}, 0)
console.log("End Now.");

// Question 150:
// Asynchronous example
console.log("Before asynchronous operation");
setTimeout(() => {
  console.log("Asynchronous operation completed");
}, 1000);
console.log("After asynchronous operation setup");