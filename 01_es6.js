// An array is declared as const s = [5, 7, 2]. 
// Change the array to [2, 5, 7] using various element assignments.
const s = [5, 7, 2];
function editInPlace() {
s[0] = 2;
s[1] = 5;
s[2] = 7;

}
editInPlace();


// In this challenge you are going to use Object.freeze to prevent mathematical constants from changing.
//  You need to freeze the MATH_CONSTANTS object so that no one is able to alter the value of PI, add,
//   or delete properties.
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  Object.freeze(MATH_CONSTANTS)
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();


// Rewrite the function assigned to the variable magic which returns a new Date() to use arrow function syntax
// . Also, make sure nothing is defined using the keyword var.
const magic = () => new Date()


// Rewrite the myConcat function which appends contents of arr2 to arr1 so that the function uses
//  arrow function syntax.
const myConcat = (arr1, arr2) => {
  "use strict";
  return arr1.concat(arr2);
};
console.log(myConcat([1, 2], [3, 4, 5]));


// Modify the function increment by adding default parameters so that it will add 1 to number if 
// value is not specified.
const increment = (number, value = 1) => number + value;
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6
