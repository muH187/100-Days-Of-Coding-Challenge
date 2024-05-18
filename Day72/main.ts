// Generic:
function returnType<T>(val: T): T {
    return val
}
const numValue: number = returnType<number>(100)
const strValue: string = returnType<string>("Ali")
const bolValue: boolean = returnType<boolean>(true)
const arrValue: number[] = returnType<number[]>([1, 2, 3, 4])

console.log(`Number Value: ${numValue}`)
console.log(`String Value: ${strValue}`)
console.log(`Boolean Value: ${bolValue}`)
console.log(`Array Value: ${arrValue}`)

// Generic Multiple Types:
function genericType<T>(val: T): T {
    return val
}
console.log(genericType<number>(100))
console.log(genericType<string>("This is Muhammad Ali"))

function multipleType<T, S>(firstVal: T, secondVal: S): string {
    return `First value is ${firstVal} and the second value is ${secondVal}`
}
console.log(multipleType<string, number>("Ali", 100))
console.log(multipleType<string, boolean>("Ali", true))