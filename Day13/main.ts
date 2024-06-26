// Question 37:
function make_shirt(size:string = "Large", message:string = "Great things take times") {
    console.log(`Make a ${size} t-shirt with the message of ${message}.`);
}
make_shirt()
make_shirt("small", "Dive into TypeScript")

// Question 38:
function describe_city(city:string, country:string) {
    console.log(`${city} city is in ${country}`)
}

describe_city("Karachi", "Pakistan")
describe_city("Moscow", "Russia")
describe_city("Beijing", "China")
describe_city("Tokyo", "Japan")

// Question 39:
function city_country(city:string, country:string):string {
    return `${city}, ${country}`
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Mumbai", "India"));
console.log(city_country("Dubai", "UAE"));
