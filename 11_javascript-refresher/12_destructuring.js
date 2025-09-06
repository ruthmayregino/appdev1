const person = {
  name: "Ruth", 
  age: 21     
};

const hobbies = ["crocheting", "driving"]; 

const { name, age } = person;
console.log(name, age);


const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

function printName({ name }) {
  console.log(name);
}
printName(person);
