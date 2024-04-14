// Question 31:

let users:string[] = []

if(users.length === 0) {
    console.log("Users list is empty...");
} else {
    users.forEach(user => {
        console.log(`Hi! How are you ${user}?`)
    })
}

// Question 32:
let current_username: string[] = ["Ali", "Tanzeel", "Hasan", "Bilal", "Mirza"]
let new_username: string[] = ["Umer", "Yasir", "Zohaib", "Basit", "Wali", "Bilal"]

new_username.forEach(newUser => {
    if(current_username.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())){
        console.log(`${newUser} username is not available.`);
    } else {
        console.log(`${newUser} is available.`)
    }
})

// Question 33:
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
numbers.forEach(number => {
    let suffix = "th"
    if(number === 1) {
        suffix = "st"
    } else if(number === 2) {
        suffix = "nd"
    } else if(number === 3) {
        suffix = "rd"
    }
    console.log(`${number}${suffix}`);
    
})