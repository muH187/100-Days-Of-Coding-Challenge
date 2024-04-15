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

// Question 63:
type Shape = {
    kind: "circle" | "rectangle",
    radius?: number,
    width?: number,
    heigth?: number
}
let circle: Shape = {
    kind: "circle",
    radius: 20
}
let rectangle: Shape = {
    kind: "rectangle",
    width: 50,
    heigth: 20
}
console.log(circle);
console.log(rectangle);
