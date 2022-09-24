const reverseString = require('../src/reverseString');

test ('reverse hello world', () => {
  expect(reverseString('hello world!')).toBe('!dlrow olleh');
});

test('reverse welcome', () => {
  expect(reverseString('welcome')).toBe('emoclew');
});

test('reverse palindrome', () => {
  expect(reverseString('racecar')).toBe('racecar');
});

test('reverse numbers', () => {
  expect(reverseString('123456')).toBe('654321');
});

test('symbols', () => {
  expect(reverseString('$!@')).toBe(`@!$`);
});

test('empty string', () => {
  expect(reverseString('')).toBe('');
});

test('null', () => {
  expect(reverseString(null)).toBe(null);
});

test('undefined', () => {
  expect(reverseString(undefined)).toBe(undefined);
});
