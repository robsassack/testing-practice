const capitalize = require('./capitalize');

test('capitalize hello world', () => {
  expect(capitalize('hello world!')).toBe('Hello world!');
});

test('capitalize welcome', () => {
  expect(capitalize('welcome')).toBe('Welcome');
});

test('already capitalized', () => {
  expect(capitalize('Test')).toBe('Test');
});

test('numbers', () => {
  expect(capitalize('123')).toBe('123');
});

test('symbols', () => {
  expect(capitalize('$!@')).toBe(`$!@`);
});

test('empty string', () => {
  expect(capitalize('')).toBe('');
});

test('null', () => {
  expect(capitalize(null)).toBe(null);
});

test('undefined', () => {
  expect(capitalize(undefined)).toBe(undefined);
});
