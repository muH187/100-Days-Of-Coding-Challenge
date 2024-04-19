// Question 106:
function isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}
console.log(isLeapYear(2024));
console.log(isLeapYear(2025));

// Question 107:
function numberDivisible(number: number): boolean {
    return number % 2 === 0 && number % 3 === 0
}
console.log(numberDivisible(30));
console.log(numberDivisible(20));

// Question 108:
function checkString(str1: string, str2: string): boolean {
    return str1.toLowerCase() === str2.toLowerCase()
}
console.log(checkString("Hello World", "Hello world"));
