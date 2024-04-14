// Question 31:

let users:string[] = []

if(users.length === 0) {
    console.log("Users list is empty...");
} else {
    users.forEach(user => {
        console.log(`Hi! How are you ${user}?`)
    })
}
