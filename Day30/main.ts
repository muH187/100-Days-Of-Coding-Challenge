// Question 88:
function roundNumber(number: number): number {
    return Math.round(number)
}
console.log(roundNumber(23.35943));
console.log(roundNumber(23.889823));

// Question 89:
function convertStringToNumber(str: string): number {
    return parseInt(str)
}
console.log(convertStringToNumber("123"));

// Question 90:
function isValueNaN(value: any): boolean {
    return isNaN(value)
}
console.log(isValueNaN("Muhammad Ali"));
console.log(isValueNaN(2024));
