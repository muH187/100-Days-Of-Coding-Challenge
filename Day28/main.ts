// Question 82:
function checkLenght(str: string) {
    return str.length
}
console.log(checkLenght("Hello World"));

// Question 83:
function convert(string: string) {
    console.log(string.toUpperCase());
    console.log(string.toLowerCase());
}
convert("Hey, I'm Muhammad Ali");

// Question 84:
function replaceStr(sentence: string): string {
    return sentence.replace(/JavaScript/g, "TypeScript")
}
console.log(replaceStr("I'm learning JavaScript."))
