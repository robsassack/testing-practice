function reverseString(str) {
  if (typeof str !== 'string') return str;
  let reversed = [];
  for (let i=str.length; i>=1; i--) {
    reversed.push(str[i-1]);
  }
  return reversed.join('');
}
module.exports = reverseString;
