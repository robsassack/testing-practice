function getAverage(arr) {
  let sum = 0;
  for (let i=0; i<arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

function getMin(arr) {
  let current = arr[0];
  for (let i=1; i<arr.length; i++) {
    if (arr[i] < current) {
      current = arr[i];
    }
  }
  return current;
}

function getMax(arr) {
  let current = arr[0];
  for (let i=1; i<arr.length; i++) {
    if (arr[i] > current) {
      current = arr[i];
    }
  }
  return current;
}

function validArray(arr) {
  for (let i=0; i<arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      return false;
    }
  }
  return true;
}

function analyzeArray(arr) {
  if (!Array.isArray(arr)) {
    return "Not an array";
  };
  if (arr.length === 0) {
    return {
      average: undefined,
      min: undefined,
      max: undefined,
      length: 0
    };
  };
  if (!validArray(arr)) {
    return "Invalid input";
  };
  return {
    average: getAverage(arr),
    min: getMin(arr),
    max: getMax(arr),
    length: arr.length
  };
}
module.exports = analyzeArray;
