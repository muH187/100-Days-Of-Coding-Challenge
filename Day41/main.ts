// Question 121:
for(let i = 1; i < 11; i++) {
    if(i === 5) {
        continue
    }
    console.log(i);
}

// Question 122:
let count: number = 10
while(count > 0) {
    if(count === 5) {
        break
    }
    console.log(count);
    count--
}

// Question 123:
function logUntilVowel(str: string): void {
    const vowels = "aeiouAEIOU";
    for (const char of str) {
      if (vowels.includes(char)) {
        console.log(`First vowel found: ${char}`);
        break;
      }
      console.log(char);
    }
  }
  
  logUntilVowel("syzygy");
  