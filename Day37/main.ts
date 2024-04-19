// Question 109:
const currentTime = new Date()
if(currentTime.getHours() < 12) {
    console.log("Good Morning");   
}

// Question 110:
function grade(marks: number): string {
    if(marks < 33) {
        return "You are failed."
    } else if (marks > 33 && marks < 50) {
        return "You got D Grade."
    } else if (marks < 60) {
        return "You got C Grade."
    } else if (marks < 70) {
        return "You got B Grade."
    } else {
        return "You got A Grade. Congratulations!"
    }
}
console.log(grade(65));
