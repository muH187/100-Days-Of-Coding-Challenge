// Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.

let dinner_invitation: string [] = ["Muhammad Mirza", "Yasir", "Bilal"]

dinner_invitation.forEach(guest => {
    console.log(`I would like ${guest} to come to our dinner party.`);
    
})

let unableToAttend: string = "Bilal"
console.log(`${unableToAttend} can't make it to dinner.`);

let newGuest: string = "Zohaib"
dinner_invitation[dinner_invitation.indexOf(unableToAttend)] = newGuest

dinner_invitation.forEach(guest => {
    console.log(`I would like ${guest} to come to our dinner party.`);
    
})
