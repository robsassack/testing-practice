const alphabet = "abcdefghijklmnopqrstuvwxyz";
const cipher = "bcdefghijklmnopqrstuvwxyza";

function caesarCipher(str) {
  if (typeof str !== 'string') return str;
  let split = str.split("");
  let result = "";
  for (let i=0; i<split.length; i++) {
    let manageCase = false;
    if (split[i] === split[i].toUpperCase()) {
      manageCase = true;
      split[i] = split[i].toLowerCase();
    }
    if (alphabet.includes(split[i])) {
      let index = alphabet.indexOf(split[i]);
      if (manageCase) {
        result += cipher[index].toUpperCase();
      } else {
        result += cipher[index];
      }
    } else {
      result += split[i];
    }
  }
  return result;
}
module.exports = caesarCipher;
