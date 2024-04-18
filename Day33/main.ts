// Question 97:
function getCurrentDate(): string {
    const now = new Date()
    const day = String(now.getDate()).padStart(2, '0')
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const year = now.getFullYear()
    return `${day}-${month}-${year}`
}
console.log(getCurrentDate());

// Question 98:
function daysUntilNewYear(): number {
    const today = new Date();
    const newYear = new Date(today.getFullYear() + 1, 0, 1);
    const diff = newYear.getTime() - today.getTime();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days;
}

console.log(daysUntilNewYear() + " days until New Year.");
