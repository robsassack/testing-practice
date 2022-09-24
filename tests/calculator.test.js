const calculator = require('../src/calculator');

test('add 2 and 2', () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test('add 10 and 20', () => {
  expect(calculator.add(10, 20)).toBe(30);
});

test('add -2 and 5', () => {
  expect(calculator.add(-2, 5)).toBe(3);
});

test('add 0.3 and 0.4', () => {
  expect(calculator.add(0.3, 0.4)).toBeCloseTo(0.7);
});

test('subtract 4 and 2', () => {
  expect(calculator.subtract(4, 2)).toBe(2);
});

test('subtract 5 and 17', () => {
  expect(calculator.subtract(5, 17)).toBe(-12);
});

test('subtract -1 and 9', () => {
  expect(calculator.subtract(-1, 9)).toBe(-10);
});

test('subtract 0.3 and 0.1', () => {
  expect(calculator.subtract(0.3, 0.1)).toBeCloseTo(0.2);
});

test('divide 10 by 2', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test('divide 15 by 3', () => {
  expect(calculator.divide(15, 3)).toBe(5);
});

test('divide 0.3 by 0.1', () => {
  expect(calculator.divide(0.3, 0.1)).toBeCloseTo(3);
});

test('divide 10 by 0', () => {
  expect(calculator.divide(10, 0)).toBe(Infinity);
});

test('divide -5 by 2', () => {
  expect(calculator.divide(-5, 2)).toBeCloseTo(-2.5);
});

test('multiply 2 by 2', () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});

test('multiply 5 by 3', () => {
  expect(calculator.multiply(5, 3)).toBe(15);
});

test('multiply 0.3 by 0.1', () => {
  expect(calculator.multiply(0.3, 0.1)).toBeCloseTo(0.03);
});

test('multiply 3 by 0', () => {
  expect(calculator.multiply(10, 0)).toBe(0);
});

test('multiply -10 by 2', () => {
  expect(calculator.multiply(-10, 2)).toBe(-20);
});

test('add "a" and 2', () => {
  expect(calculator.add("a", 2)).toBe('Invalid input');
});

test('add null and 2', () => {
  expect(calculator.add(null, 2)).toBe('Invalid input');
});

test('add undefined and 2', () => {
  expect(calculator.add(undefined, 2)).toBe('Invalid input');
});

test('subtract "a" and 5', () => {
  expect(calculator.subtract("a", 5)).toBe('Invalid input');
});

test('subtract null and 5', () => {
  expect(calculator.subtract(null, 5)).toBe('Invalid input');
});

test('subtract undefined and 5', () => {
  expect(calculator.subtract(undefined, 5)).toBe('Invalid input');
});

test('divide 10 by "a"', () => {
  expect(calculator.divide(10, "a")).toBe('Invalid input');
});

test('divide 10 by null', () => {
  expect(calculator.divide(10, null)).toBe('Invalid input');
});

test('divide 10 by undefined', () => {
  expect(calculator.divide(10, undefined)).toBe('Invalid input');
});

test('multiply "a" by 3', () => {
  expect(calculator.multiply("a", 3)).toBe('Invalid input');
});

test('multiply null by 3', () => {
  expect(calculator.multiply(null, 3)).toBe('Invalid input');
});

test('multiply undefined by 3', () => {
  expect(calculator.multiply(undefined, 3)).toBe('Invalid input');
});
