//#29 Lodash - Thư Viện Top 1 Hỗ Trợ Thao Tác Array và Object
const _ = require('lodash');

// Chunk an array into smaller arrays of a specified size
const array = [1, 2, 3, 4, 5, 6, 7, 8];
const chunkedArray = _.chunk(array, 3);
console.log(chunkedArray); // Output: [ [1, 2, 3], [4, 5, 6], [7, 8] ]

// Find the index of an element in an array
const index = _.indexOf(array, 5);
console.log(index); // Output: 4

// Remove falsy values from an array
const falsyArray = [0, 1, false, true, '', 'hello', null, undefined];
const compactedArray = _.compact(falsyArray);
console.log(compactedArray); // Output: [1, true, 'hello']
