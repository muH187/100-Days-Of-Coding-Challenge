// Questoin 115:
let days: number = 4
switch(days) {
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday");
        break
    case 3:
        console.log("Wednessday");
        break
    case 4:
        console.log("Thursday");
        break
    case 5:
        console.log("Friday");
        break
    case 6:
        console.log("Saturday");
        break
    case 7:
        console.log("Sunday");
        break
    default:
        console.log("There are only 7 days in a week!");
        break
}

// Question 116:
function logSeason(month: number): void {
    switch(month) {
        case 12:
        case 1:
        case 2:
            console.log("Winter");
            break
        case 3:
        case 4:
        case 5:
            console.log("Spring");
            break
        case 6:
        case 7:
        case 8:
            console.log("Summer");
            break
        case 9:
        case 10:
        case 11:
            console.log("Fall");
            break
        default:
            console.log("Invalid Month!");
            break    
    }
}
logSeason(12)