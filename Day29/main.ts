// Question 85:
function findPosition(str: string): number {
    return str.indexOf("code")
}
console.log(findPosition("I'm learning to code in TypeScript"));

// Question 86:
function findText(string: string): boolean {
    return string.includes("JavaScript")
}
console.log(findText("I love TypeScript"));

// Question 87:
function extractingString(str1: string): string {
    return str1.substring(0, 10)
}
console.log(extractingString("I love programming."));
