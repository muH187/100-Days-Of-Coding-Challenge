enum Days {
    Sunday,
    Monday,
    Tuesday,
    Wednessday,
    Thursday,
    Friday,
    Saturday,
}
const today: Days = Days.Friday
console.log(`Today is ${Days[today]}`)