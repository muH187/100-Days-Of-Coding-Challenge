// Question 43:
let magicians: string[] = ["The Maxi", "Chris Killer", "Alex Haunted"]

function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = []
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

// Question 44:
function make_sandwhich(...items:string[]) {
    console.log(`Making a sandwich with: ${items.join(", ")}.`);
}
make_sandwhich("Ketchup",  "Mayonees")
make_sandwhich("Kabaab", "Bread")

// Question 45:
function make_car(manufacturer: string, model: string, ...options:[string, any][]): Object {
    let car = { manufacturer, model }
    options.forEach(([key, value]) => car[key] = value)
    return car
}
console.log(make_car("Honda", "Civic", ["6 air bags", true], ["year", 2002]));
console.log(make_car("Hyundai", "Tucson", ["color", "off-white"], ["year", 2024]));
