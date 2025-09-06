console.log("0 == false:", 0 == false);   
console.log("0 === false:", 0 === false); 

let x;
let y = null;
console.log("x:", x, "y:", y);

let obj = {
  regular: function() { console.log("Regular:", this); },
  arrow: () => { console.log("Arrow:", this); }
};
obj.regular(); 
obj.arrow();   


let arr1 = [1, 2, 3];
let arr2 = arr1; 
arr2.push(4);
console.log("arr1:", arr1, "arr2:", arr2);

let arr3 = [1, 2, 3];
let arr4 = [...arr3]; 
arr4.push(4);
console.log("arr3:", arr3, "arr4:", arr4);
