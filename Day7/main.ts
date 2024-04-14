// Question 19:

let dinner_invitation: string [] = ["Muhammad Mirza", "Yasir", "Bilal"]
let more_guests: string[] = ["Wali", "Hassan", "Harris", "Yusha", "Tanzeel"]

let full_guests: string[] = dinner_invitation.concat(more_guests)

console.log(`We are inviting ${full_guests.length} people in our dinner.`);

// Question 20:

let languages: string[] = ["English", "Chinese", "Arabic", "German", "Spanish"]

console.log(`Languages I would like to learn ${languages}`);

// Question 21:

let car: { company: string; model: string; year: number } = {
    company: "Honda",
    model: "Civic",
    year: 2023
}

console.log(`This is ${car.company} ${car.model} year ${car.year}`);