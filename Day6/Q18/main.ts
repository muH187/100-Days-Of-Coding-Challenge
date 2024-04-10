// Question 18: Seeing the World: Think of at least five places you’d like to visit.

// Explain & TIP: Arrays can be ordered and reordered in various ways without altering the original list, useful for planning and organizing information.

let places: string[] = ["USA", "Germany", "Australia", "Japan", "Russia"]

console.log("Original order", places);
console.log("Alphabetical order", [...places].sort());

console.log("Original order", places);
console.log("Reverse alphabetical order", [...places].sort().reverse());

console.log("Original order", places);

places.reverse()
console.log("Reverse order", places);

places.reverse()
console.log("Original order", places);

places.sort()
console.log("Alphabetical sort", places);

places.reverse()
console.log("Reverse alphabetical sort", places);





