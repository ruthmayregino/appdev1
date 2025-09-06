const numbers = [1, 2, 3];
const user = { name: "Ruth", age: 21 }; 

const moreNumbers = [...numbers, 4, 5];
console.log(moreNumbers);

const newUser = { ...user, hobby: "driving" };
console.log(newUser);

function sum(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}
console.log("Sum:", sum(1, 2, 3, 4, 5));
