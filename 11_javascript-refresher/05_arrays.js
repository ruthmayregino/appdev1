let foods = ["Pizza", "Burger", "Fries"];

foods.push("Sushi");
foods.shift();

console.log("Foods:", foods);

for (let food of foods) {
  console.log(food);
}

let likes = foods.map(food => `I like ${food}`);
console.log(likes);
