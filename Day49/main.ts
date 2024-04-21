// Question 145:
function executeCallback(
    callback: (arg1: number, arg2: number) => void,
    arg1: number,
    arg2: number
  ): void {
    callback(arg1, arg2);
  }
  
  const add = (a: number, b: number) => {
    console.log(a + b);
  };
  
  executeCallback(add, 5, 3);

// Question 146:
const numbers: number[] = [1,2,3,4,5,6,7,8,9,10]
const filteredNumbers: number[] = numbers.filter((number) => number > 5) 
console.log(filteredNumbers);

// Question 147: