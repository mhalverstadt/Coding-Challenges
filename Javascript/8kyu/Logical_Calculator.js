// Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

// Examples
// booleans = [True, True, False], operator = "AND"
// True AND True -> True
// True AND False -> False
// return False
// booleans = [True, True, False], operator = "OR"
// True OR True -> True
// True OR False -> True
// return True
// booleans = [True, True, False], operator = "XOR"
// True XOR True -> False
// False XOR False -> False
// return False
// Input
// an array of Boolean values (1 <= array_length <= 50)
// a string specifying a logical operator: "AND", "OR", "XOR"
// Output
// A Boolean value (True or False).


// Mine:
function logicalCalc(array, op){
  let logic = {
    'AND' : `&&`,
    'OR' : `||`,
    'XOR' : `^`
  }
  let str = array.join(` ${logic[op]} `)
  return str
}
//Top Solution:
var ops = {
  'AND': (a, b) => a && b,
  'OR': (a, b) =>  a || b,
  'XOR': (a, b) => a !== b
}
//OR
function logicalCalc(array, op){
  if (op === "AND") { return array.every(v => v); }
  if (op === "OR")  { return array.some(v => v); }
  if (op === "XOR") { return Boolean(array.reduce((p, c) => p ^ c)); }
}

function logicalCalc(array, op){
  return array.reduce(ops[op]);
}


//Test:
console.log(logicalCalc([true, true, true, false], "AND"))
