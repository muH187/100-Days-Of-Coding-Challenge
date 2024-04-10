// Question 19: Dinner Guests: Use one of your programs from Exercises 14 through 18 to print a message indicating the number of people you are inviting to dinner.

let dinner_invitation: string [] = ["Muhammad Mirza", "Yasir", "Bilal"]
let more_guests: string[] = ["Wali", "Hassan", "Harris", "Yusha", "Tanzeel"]

let full_guests: string[] = dinner_invitation.concat(more_guests)

console.log(`We are inviting ${full_guests.length} people in our dinner.`);
