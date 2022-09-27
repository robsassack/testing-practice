const analyzeArray = require('../src/analyzeArray');

test('analyze basic numbers', () => {
  expect(analyzeArray([1,8,3,4,2,6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});

test('analyze with negative numbers', () => {
  expect(analyzeArray([1,-2,5,-9])).toEqual({
    average: -1.25,
    min: -9,
    max: 5,
    length: 4
  });
});

test('analyze with decimals', () => {
  expect(analyzeArray([0.25,1.5,0.75,0.8])).toEqual({
    average: 0.825,
    min: 0.25,
    max: 1.5,
    length: 4
  });
});

test('analyze empty array', () => {
  expect(analyzeArray([])).toEqual({
    average: undefined,
    min: undefined,
    max: undefined,
    length: 0
  });
});

test('analyze array with one element', () => {
  expect(analyzeArray([5])).toEqual({
    average: 5,
    min: 5,
    max: 5,
    length: 1
  });
});

test('analyze non array', () => {
  expect(analyzeArray('test')).toBe('Not an array');
});

test('analyze null', () => {
  expect(analyzeArray(null)).toBe('Not an array');
});

test('analyze undefined', () => {
  expect(analyzeArray(undefined)).toBe('Not an array');
});

test('analyze array with strings', () => {
  expect(analyzeArray(['a', 'b', 'c'])).toBe('Invalid input');
});
