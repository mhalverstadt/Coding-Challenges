// I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

// Can you figure out what's wrong here?
// function swapValues() {
//     var args = Array.prototype.slice.call(arguments);
//     var temp = args[0];
//     args[0] = args[1];
//     args[1] = temp;
// }

//Mine:Didn't understand the question
function swapValues(arr1) {
  let first = arr1[0]
  let second = arr1[1]
  let arr = [second, first]
  return arr
}

//Top Solution:
function swapValues() {
  return arguments[0].reverse();
}

//Test:
swapValues([1,2])