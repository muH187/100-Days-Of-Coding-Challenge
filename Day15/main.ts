// Question 43:
let magicians: string[] = ["The Maxi", "Chris Killer", "Alex Haunted"]

function make_great(magicians: string[]): string[] {
    let greatMagicians = []
    magicians.forEach(magician => {
        greatMagicians.push(`${magician} the Great`)
    })
    return greatMagicians
}
let greatMagicians = make_great(magicians.slice())
console.log("Original Array");
console.log(magicians);
console.log("Modified Array");
console.log(greatMagicians);



