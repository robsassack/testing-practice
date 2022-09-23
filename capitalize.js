function capitalize(str) {
  if (typeof str !== 'string') return str;
  if (str.length === 0) return '';
  let newStr = str.split('');
  newStr[0] = newStr[0].toUpperCase();
  return newStr.join('');
}
module.exports = capitalize;
