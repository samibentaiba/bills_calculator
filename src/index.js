// index.js

const getChange = require('./algorithms/changeCalculator');

// Example Usage
let totalAmount = 47;
let denominations = [1, 5, 10, 20];

let result = getChange(totalAmount, denominations);
console.log(result); // Output: { 20: 2, 5: 1, 1: 2 }
