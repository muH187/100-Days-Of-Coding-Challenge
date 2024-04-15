// Question 61:
enum VehicleType {
    Car,
    Truck,
    Motocycle,
    Plane
}
console.log(VehicleType.Plane);

// Question 62:
interface Student {
    name: string
    age: number
    courses: string[]
}

let student1: Student = {
    name: "Ali",
    age: 19,
    courses: ["JavaScript", "TypeScript", "Python"]
}
let student2: Student = {
    name: "Tanzeel",
    age: 20,
    courses: ["Computer", "Maths", "Business"]
}
console.log(student1);
console.log(student2);
