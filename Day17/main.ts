// Question 49:
function myHobbies(...hobbies:string[]) {
    hobbies.forEach(hobby => {
        console.log(`I enjoy ${hobby}`);
    })
}
myHobbies("Coding", "Reading", "Writing")

// Question 50:
let myIdealDay = `My ideal day would look like:
1. I woke up at Fajr.
2. I execise.
3. I learnt many new concepts of programming.
4. I post on linkedin.`
console.log(myIdealDay);

// Question 51:
function calculateArea(width: number, height: number): number {
    return width * height
}
console.log(calculateArea(40, 30))

const rectangleArea = (width: number, height: number): number => {return width * height}
console.log(rectangleArea(50, 50));
