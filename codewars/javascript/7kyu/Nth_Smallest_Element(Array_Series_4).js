// Task
// Given an array/list of integers, find the Nth smallest element in the array.

// Notes
// Array/list size is at least 3.
// Array/list's numbers could be a mixture of positives , negatives and zeros.
// Repetition in array/list's numbers could occur, so don't remove duplications.

////////////////////////////////////////////////////////

//input will be an array with length of at least 3. all whole numbers, no other characters, zeros and negatives included. no nested arrays (flat). Numbers could repeat. input will be a number representing nth lowest. 

//return the nth lowest number. 


//Mine:
function nthSmallest(arr, pos){
    return sortedArr = arr.sort((a,b) => a - b)[pos - 1]
}

//Top Solution:
function nthSmallest(arr, pos){
    return arr.sort((a,b)=>a-b)[pos-1]
}

//Test:  
  console.log(nthSmallest([2,4,3,4,5], 2), '3')
  console.log(nthSmallest([5,3,-21,0,1], 3), '1')
  console.log(nthSmallest([-2,-43,-4, 0], 4), '0')