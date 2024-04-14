// Question 13:

let favorite_car: string[] = ["Tucson", "Fortuner", "Sonata", "Civic"]

favorite_car.forEach(car => {
    console.log(`I would like to own a ${car} car.`);
    
})

// Question 14:
let dinner_invitation: string [] = ["Muhammad Mirza", "Yasir", "Bilal"]

dinner_invitation.forEach(guest => {
    console.log(`I would like ${guest} to come to our dinner party.`);
    
})

// Question 15:
let dinner_invitations: string [] = ["Muhammad Mirza", "Yasir", "Bilal"]

dinner_invitations.forEach(guest => {
    console.log(`I would like ${guest} to come to our dinner party.`);
    
})

let unableToAttend: string = "Bilal"
console.log(`${unableToAttend} can't make it to dinner.`);

let newGuest: string = "Zohaib"
dinner_invitation[dinner_invitation.indexOf(unableToAttend)] = newGuest

dinner_invitation.forEach(guest => {
    console.log(`I would like ${guest} to come to our dinner party.`);
    
})