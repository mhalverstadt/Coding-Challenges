// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

// Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.

// Task
// Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

// Example
// Input: 1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

//Mine:
function pipeFix(numbers){
  let pipeOrder = []
  for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++){
    pipeOrder.push(i)
  }
  return pipeOrder
}


//Top Solution:
function pipeFix(numbers){
  var first = numbers[0];
  var last = numbers[numbers.length-1];
  
  var arr = [];
  for(var i = first; i <= last; i++) {
    arr.push(i);
  }
  return arr;
}

//OR:
let pipeFix = nums => Array.from({ length: nums.pop() - nums[0] + 1 }, (v, i) => i + nums[0]);


//Test: 
pipeFix([1,2,3,12])
