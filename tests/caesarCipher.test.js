const caesarCipher = require('../src/caesarCipher');

test('cipher Hello world', () => {
  expect(caesarCipher('Hello world')).toBe('Ifmmp xpsme');
});

test('cipher Welcome', () => {
  expect(caesarCipher('Welcome')).toBe('Xfmdpnf');
});

test('cipher with numbers', () => {
  expect(caesarCipher('I need 10 apples')).toBe('J offe 10 bqqmft');
});

test('cipher just numbers', () => {
  expect(caesarCipher(123456)).toBe(123456);
});

test('cipher with punctuation', () => {
  expect(caesarCipher(`Hey, how's it going?`)).toBe(`Ifz, ipx't ju hpjoh?`);
});

test('cipher entire alphabet', () => {
  expect(caesarCipher('The quick brown fox jumps over the lazy dog.')).toBe('Uif rvjdl cspxo gpy kvnqt pwfs uif mbaz eph.');
});

test('cipher empty string', () => {
  expect(caesarCipher('')).toBe('');
});

test('cipher null', () => {
  expect(caesarCipher(null)).toBe(null);
});

test('cipher undefined', () => {
  expect(caesarCipher(undefined)).toBe(undefined);
});
