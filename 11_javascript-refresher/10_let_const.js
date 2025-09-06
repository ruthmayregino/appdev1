var name = "Ruth"; 
var age = 21;
age = 20;
console.log("var:", name, age);

let myName = "Ruth";
let myAge = 21;
myAge = 22; 
console.log("let:", myName, myAge);

const birthYear = 2003;
try {
  birthYear = 2004;
} catch (error) {
  console.log("const cannot be reassigned:", error.message);
}
