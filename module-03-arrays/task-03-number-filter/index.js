'use strict';

const filterArray = function (numbers, value) {
  let filteredNumbers = [];

  for (const number of numbers) {
    if (number > value) filteredNumbers.push(number);
  }

  return filteredNumbers;
};

// Test cases
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
