// Type Annotations With Arrays:
let myFavoriteFruits: string[] = ["Mango", "Banana", "Kivi", "Orange", "Apple"]
for (let i = 0; i < myFavoriteFruits.length; i++) {
    console.log("This is my favorite fruit", myFavoriteFruits[i])
}

// Type Annotations With Multidimensional Arrays
let string: string[] = ["A", "B", "C"]
let number: number[] = [1, 2, 3]
let stringAndNumber: (string | number)[] = [1, 2, 3, "A", "B", "C"]