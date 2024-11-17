// changeCalculator.js

function getChange(totalAmount, denominations) {
    // Sort denominations in descending order
    denominations.sort((a, b) => b - a);

    // Initialize result object to store the count of each denomination
    let change = {};
    let remainingAmount = totalAmount;

    for (let i = 0; i < denominations.length; i++) {
        let denom = denominations[i];
        // Calculate how many of the current denomination can be used
        if (remainingAmount >= denom) {
            let count = Math.floor(remainingAmount / denom);
            change[denom] = count;
            remainingAmount -= count * denom;
        }
    }

    // If there is any remaining amount, it's not possible to give exact change
    if (remainingAmount > 0) {
        return "Exact change not possible with given denominations.";
    }

    return change;
}

module.exports = getChange;
