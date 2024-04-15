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
