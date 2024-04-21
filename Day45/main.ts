// Question 133
const person = {
    name: "Ali",
    age: 19,
    city: "Karachi",
    country: "Pakistan"
}
const jsonString = JSON.stringify(person)
console.log(jsonString)

// Question 134:
const jsonString2 = `{"name":"Ali", "age":19, "country":"Pakistan"}`
const person2 = JSON.parse(jsonString)
console.log(person);

// Question 135:
const person3 = {
    name: "Tanzeel",
    age: 21,
    country: "Pakistan"
}
const jsonString3 = JSON.stringify(person3, null, 10)
console.log(jsonString3)