// Class Type Annotations:
class Product {

    id: number
    name: string
    price: number

    constructor(id: number, name: string, price: number) {
        this.id = id
        this.name = name
        this.price = price
    }

    getProductInfo(): string {
        return `ID: ${this.id}, Name: ${this.name}, Price: ${this.price}`
    }
}
const product1 = new Product(100, "Trimmer", 200)
console.log(product1.getProductInfo())

// Class Access Modifiers:
class MyClassPublic {
    public name: string
    constructor(name: string) {
        this.name = name
    }
}
const instancePublic = new MyClassPublic("Ali")
console.log(instancePublic.name)

class MyClassPrivate {
    private secret: string
    constructor(secret: string) {
        this.secret = secret
    }
}
const instancePrivate = new MyClassPrivate("This is secret.")
// console.log(instancePrivate.secret) This cause an error:
instancePrivate.revealSecret()
