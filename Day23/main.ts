// Question 67:
function addNumberAndString (number1: number, numberString: string) {
    return number1 + Number(numberString)
}
console.log(addNumberAndString(20, "30"));

// Question 68:
function multiplyDecimal(number1: number, number2: number): number {
    return Math.round(number1 * number2)
}
console.log(multiplyDecimal(23.6235, 10.2352));

// Question 69:
function dividentAndRemainder (divident: number, divisor: number): {quotient: number, remainder: number} {
    let quotient = Math.floor(divident / divisor)
    let remainder = divident % divisor
    return { quotient, remainder }
}
console.log(dividentAndRemainder(10, 3));
