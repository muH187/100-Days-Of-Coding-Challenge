// Question 103:
function randomBoolean (): boolean {
    return Math.random() > 0.5
}
console.log(randomBoolean());

// Question 104:
function getRandomHexColor(): string {
    const color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    return color;
}

console.log(getRandomHexColor());

// Question 105:
function randomDiceRoll(): number {
    return Math.floor(Math.random() * 6 + 1)
}
console.log(randomDiceRoll());
