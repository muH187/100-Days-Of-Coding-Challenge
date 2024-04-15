// Question 46:
let laptop = {
    make: "Lenovo",
    model: "x280",
    year: 2018,
    describe: function () {
        console.log(`This laptop is a ${this.make} ${this.model} ${this.year}`)
    }
}
laptop.describe()

// Question 47:
let laptops = [
    {make: "Apple", model: "Macbook Pro", year: "2020"},
    {make: "Dell", model: "Elite", year: "2019"},
    {make: "Lenovo", model: "Carbon X", year: "2024"},
]
let [firstLine, secondLine] = laptops
console.log(firstLine);
console.log(secondLine);

// Question 48:
let laptopPrice1 = [15000, 20000, 8000]
let laptopPrice2 = [19000, 30000, 4000]
let combinedPrice = [...laptopPrice1, ...laptopPrice2].sort((a, b) => a + b)
console.log(combinedPrice);
 