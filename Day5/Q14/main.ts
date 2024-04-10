// Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let dinner_invitation: string [] = ["Muhammad Mirza", "Yasir", "Bilal"]

dinner_invitation.forEach(invite => {
    console.log(`I would like ${invite} to come to our dinner party.`);
    
})