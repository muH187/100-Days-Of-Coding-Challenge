// Question 112:
let map = {
    Pakistan: "Islamabad",
    Iran: "Tehran",
    China: "Beijing",
    Canada: "Ottawa"
}
console.log(map);

// Question 113:
function checkMap(): string {
    return map.Canada
}
console.log(checkMap());

// Question 114:
const students = new Map<number, string>()
students.set(1, "Muhammad Ali")
students.set(2, "Muhammad Mirza")
students.set(3, "Hassan")
students.set(4, "Tanzeel")
students.set(5, "Tamim")

students.forEach((name, id) => {
    console.log(`Student ID: ${id}, Name: ${name}`);
})
