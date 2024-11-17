# Vending Machine Change Calculator Algorithm

This project contains an algorithm for calculating the optimal way to provide change using available denominations of bills and coins. The goal is to minimize the total number of bills and coins used to make up a specific target amount. This algorithm is useful for applications such as vending machines that need to determine the minimum number of coins and bills to provide change.

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Testing](#testing)
4. [Algorithm Explanation](#algorithm-explanation)

## Installation

To install and run this project, follow the steps below:

### Prerequisites
- **Node.js**: Ensure you have Node.js installed on your machine. If you don't have it, you can download it from [nodejs.org](https://nodejs.org/).

### Steps to Install

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/vending-machine-change.git

    Navigate to the project directory:

cd vending-machine-change

Install the necessary dependencies:

npm install

Install Jest for testing:

    npm install --save-dev jest

Usage
Algorithm Function

The core function changeCalculator takes two parameters:

    amount: The total amount of change to be given.
    denominations: An array of available bill and coin denominations.

It returns an object where the keys are the denominations used and the values represent the count of each denomination.
Example Usage

const { changeCalculator } = require('./src/algorithms/changeCalculator');

const change = changeCalculator(47, [1, 5, 10, 20]);

console.log(change); 
// Output: { 20: 2, 5: 1, 1: 2 }

This example returns the minimum number of coins/bills required to make up 47 with the denominations [1, 5, 10, 20].
Error Handling

If it’s not possible to give the exact change with the available denominations, the function will return an error message:

const change = changeCalculator(7, [5, 10]);
console.log(change);
// Output: 'Exact change is not possible with the given denominations.'

Testing

To ensure everything is working correctly, the project includes tests using Jest.
Running Tests

To run the tests, use the following command:

npm test

This will execute Jest and run the test suite located in the tests/ directory.
Example Test

The test cases ensure the algorithm works correctly for various scenarios, such as:

    When exact change is possible.
    When exact change isn't possible.
    Handling an empty denominations array.

test('should return correct change for 47 with [1, 5, 10, 20] denominations', () => {
  expect(changeCalculator(47, [1, 5, 10, 20])).toEqual({
    20: 2,
    5: 1,
    1: 2,
  });
});

Algorithm Explanation

The algorithm works by iterating through the available denominations in descending order. It greedily selects the largest possible denominations to minimize the total number of bills/coins. It also ensures that the exact amount of change is returned or provides an error message if it's not possible.
Steps:

    Start with the highest denomination.
    Subtract the value of the denomination from the target amount until it’s no longer possible.
    Repeat this for the next lower denomination.
    Continue until all denominations are exhausted or the target amount reaches zero.
    If the target amount cannot be reached exactly, return an error.

This project is licensed under the MIT License - see the LICENSE file for details.


### How to Use:
1. **Installation**: Explains how to clone the repository, install dependencies, and set up the environment.
2. **Usage**: Details how to use the `changeCalculator` function, with an example.
3. **Testing**: Instructions on how to run tests using Jest, including an example test case.
4. **Algorithm Explanation**: Provides an explanation of the algorithm's logic and how it works.

You can update the `git clone` URL in the `Installation` section with the actual repository URL.

