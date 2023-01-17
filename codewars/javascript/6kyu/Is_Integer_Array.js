// Write a function with the signature shown below:

// function isIntArray(arr) {
//   return true
// }
// returns true  / True if every element in an array is an integer or a float with no decimals.
// returns true  / True if array is empty.
// returns false / False for every other input.


function isIntArray(arr) {
  if(Array.isArray(arr) !== true){
    return false
  }else if(arr.length < 1){
    return true
  }
  return arr.every(num => num % 1 == 0 && typeof num === 'number')
}

//top solution:
function isIntArray(arr) {
    return Array.isArray(arr) && arr.every(function (x) { return Math.floor(x) === x });
  }

  
//test:
console.log(isIntArray([]))
console.log(isIntArray([1,2,3,4]))
console.log(isIntArray([1, 2, 3, NaN]))
console.log(isIntArray([1, 2, 3, 4.4]))