'use strict';

try {
  // Replace 'Oeurn soknai' with your full name
  console.log('Student Name: [Oeurn soknai]'); // Add your full name here
  x = 10; // ReferenceError: x is not defined
} catch (error) {
  console.error(error.message); // Output: "x is not defined"
}

function demo() {
  try {
    y = 20; // ReferenceError: y is not defined
  } catch (error) {
    console.error(error.message); // Output: "y is not defined"
  }
}

demo();

try {
  eval('var z = 50; delete z;'); // SyntaxError: Cannot delete variable declared with var
} catch (error) {
  console.error(error.message); // Output: "Cannot delete property 'z' of #<Object>"
}
