// Question 127:
const greet = () => {
    console.log("Hello World");
}
greet()

// Question 128:
const multiply = (a, b) => {
    return a * b
}
console.log(multiply(2, 10));

// Question 129:
const traditionalVSarrow = {
    value: "Traditional VS Arrow Function",
    traditional: function () {
        console.log("This is Traditional:", this.value);
    },
    arrow: () => {
        console.log("This is Arrow:", this.value);
    }
}

traditionalVSarrow.traditional()
traditionalVSarrow.arrow()