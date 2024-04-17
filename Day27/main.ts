// Question 79:
let car = {
    make: "Honda",
    model: "Civic RS Turbo",
    year: 2024
}
console.log(car);

// Question 80:
(car as any).color = "Black"
car.year = 2025
console.log(car);

// Question 81:
function objProperty(obj: object) {
    for(let property in obj) {
        console.log(`${property}: ${obj[property]}`);
    }
}
objProperty({make: "Hyundai", model: "Sonata", year: 2023, color: "White"})