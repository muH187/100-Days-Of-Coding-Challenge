// Union Type:
let myDetail: string | number
myDetail = "Ali"
console.log(myDetail)
myDetail = 19
console.log(myDetail)

// Literal Type:
let currency: "USD" | "PKR" | "EUR" | "INR"
currency = "PKR"
console.log(currency)
currency = "USD"
console.log(currency)

// Nullable Type:
function greetUser(name: string | null) {
    if(name === null) {
        console.log(`Hello! Guest.`)
    } else {
        console.log(`Hello! ${name}.`)
    }
}
greetUser(null)
greetUser("Tanzeel")

// Intersection Type:
type firstType = {
    name: string
    age: number
}
type secondType = {
    address: string
    phone: string
}

type combinedType = firstType & secondType

const person = {
    name: "Ali",
    age: 19,
    address: "Federal B Area",
    phone: "111-222-333"
}