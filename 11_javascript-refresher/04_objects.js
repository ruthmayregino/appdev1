let aboutMe = {
  name: "Ruth",
  age: 21,
  course: "BSIS",
  introduce() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

aboutMe.introduce();
aboutMe.hobby = "Reading"; 
console.log(aboutMe);
