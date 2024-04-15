// Question 52:
let phone = {
    brand: "Apple",
    model: "iPhone 15 Pro Max",
    screen: "6.8 Inches",
    storage: "1TB Storage",
    battery: "2 Day long battery life",
    describe: function () {console.log(`This phone is an ${this.brand} ${this.model}, big screen size of ${this.screen}, has ${this.storage}, and ${this.battery}`)}
}
phone.describe()

// Question 53:
let developerSkills = {
    languages: ["JavaScript", "TypeScript", "Python"],
    frameworks: ["Tailwindcss", "Next.js", "React.js"],
    tools: ["Git", "GitHub", "Docker"]
}
let { languages, frameworks, tools } = developerSkills
console.log(`Languages: ${languages[0]}, Frameworks: ${frameworks[0]}, Tools: ${tools[1]}`);
