// Question 70:
function countDown() {
    for (var i = 0; i < 6; i++) {
        console.log(i);
    }
}
countDown();
// Question 71:
var age = 19;
age = 20;
console.log(age);
var name = "Ali";
try {
    name = "Alee";
}
catch (error) {
    console.log("Error: Can't reassign a 'const'-declared variable.");
}
// Question 72:
{
    var blockLet = "visible inside the block";
    var blockConst = "also visible inside the block";
    console.log(blockLet);
    console.log(blockConst);
}
try {
    console.log(blockLet);
}
catch (error) {
    console.log("blockLet is not accessible outside the block");
}
try {
    console.log(blockConst);
}
catch (error) {
    console.log("blockConst is not accessible outside the block");
}
