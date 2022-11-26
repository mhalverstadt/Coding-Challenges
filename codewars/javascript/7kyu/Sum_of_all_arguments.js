// DESCRIPTION:
// Write a function that finds the sum of all its arguments.

// eg:

// sum(1, 2, 3) // => 6
// sum(8, 2) // => 10
// sum(1, 2, 3, 4, 5) // => 15

//Mine:
function sum(...args) {
  return [...args].reduce((a,b) => a+b,0)
}

//Top Solution:
function sum() {
  var total = 0;
  for(var i in arguments){
    total += arguments[i];
  }
  return total;
}