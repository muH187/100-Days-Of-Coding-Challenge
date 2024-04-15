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
