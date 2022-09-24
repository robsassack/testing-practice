function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') return "Invalid input";
  return a + b;
}

function subtract(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') return "Invalid input";
  return a - b;
}

function divide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') return "Invalid input";
  return a / b;
}

function multiply(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') return "Invalid input";
  return a * b;
}

const calculator = {
  add,
  subtract,
  divide,
  multiply
};
module.exports = calculator;
