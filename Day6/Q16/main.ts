// Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.

let dinner_invitation: string [] = ["Muhammad Mirza", "Yasir", "Bilal"]
let more_guests: string[] = ["Wali", "Hassan", "Harris", "Yusha", "Tanzeel"]

let full_guests: string[] = dinner_invitation.concat(more_guests)

full_guests.forEach(guests => {
    console.log(`I invite you ${guests} to come to our dinner party.`);
    
})