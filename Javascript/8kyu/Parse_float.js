// Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.

//Mine:
function parseF(s) {
  let x = parseFloat(s)
  return Number.isNaN(x) ? null : x
}

//Top Solution:
function parseF(s) {
  return isNaN(parseFloat(s)) ? null : parseFloat(s);
}

//Test:
console.log(parseF("1"))