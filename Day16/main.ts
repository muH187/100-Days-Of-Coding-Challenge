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