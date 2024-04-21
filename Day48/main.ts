// Question 142:
let helloPromise = new Promise<string>((resolve) => {
    setTimeout(() => {
        resolve("Hello World")
    }, 2000);
})
helloPromise.then((message) => console.log(message))
// Question 143:
const conditionalPromise = new Promise<string>((resolve, reject) => {
  const success = Math.random() > 0.5;
  if (success) {
    resolve("Success!");
  } else {
    reject(new Error("Failure"));
  }
});

conditionalPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));


// Question 144: