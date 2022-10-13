// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.


//Mine:
function largestPairSum (numbers) {
    let sortedArr = numbers.sort((a,b) => b-a)
    return sortedArr[0] + sortedArr[1]
}
  
  

//Top Solution:


//Test:
console.log(largestPairSum([10,14,2,23,19]))
