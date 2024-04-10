// Question 21: Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let car: { company: string; model: string; year: number } = {
    company: "Honda",
    model: "Civic",
    year: 2023
}

console.log(`This is ${car.company} ${car.model} year ${car.year}`);
