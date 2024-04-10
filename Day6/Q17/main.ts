// Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.

let dinner_invitation: string [] = ["Muhammad Mirza", "Yasir", "Bilal"]
let more_guests: string[] = ["Wali", "Hassan", "Harris", "Yusha", "Tanzeel"]

let full_guests: string[] = dinner_invitation.concat(more_guests)

let onlyTwoGuest: string[] = [full_guests[4], full_guests[7]]

onlyTwoGuest.forEach(twoGuest => {
    console.log(`Because of time shortage ${twoGuest} is coming.`); 
})
