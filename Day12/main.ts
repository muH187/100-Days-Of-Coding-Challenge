// Question 34: 
let pizzas:string [] = ["Chicken Tikka Pizza", "Malai Botti Pizza", "Cheese Pizza"]

pizzas.forEach(pizza => {
    console.log(`I like ${pizza}`);
})

// Question 35:
let animals: string[] = ["Eagle", "Crow", "Parrot"]

animals.forEach(animal => {
    console.log(`${animal} can fly`);
})
console.log("All the above birds can fly");

// Question 36:
function make_Tshirts(size:string, message:string) {
    console.log(`Making a ${size} t-shirt with the message of ${message}`)
}
make_Tshirts("large", "Comfortable with being uncomfortable.")