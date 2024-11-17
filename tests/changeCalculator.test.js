// changeCalculator.test.js
const getChange = require('../src/algorithms/changeCalculator');

describe('Change Calculator', () => {
  test('should return correct change for 47 with [1, 5, 10, 20] denominations', () => {
    const result = getChange(47, [1, 5, 10, 20]);
    expect(result).toEqual({ 20: 2, 5: 1, 1: 2 });
  });

  test('should return error message when exact change is not possible', () => {
    const result = getChange(3, [5, 10]);
    expect(result).toBe('Exact change not possible with given denominations.');
  });

  test('should return correct change for 30 with [1, 5, 10] denominations', () => {
    const result = getChange(30, [1, 5, 10]);
    expect(result).toEqual({ 10: 3 });
  });

  test('should handle empty denominations array', () => {
    const result = getChange(30, []);
    expect(result).toBe('Exact change not possible with given denominations.');
  });

  test('should return correct change for 100 with [1, 2, 5, 10, 20, 50] denominations', () => {
    const result = getChange(100, [1, 2, 5, 10, 20, 50]);
    expect(result).toEqual({ 50: 2 });
  });
});
