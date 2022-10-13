// In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

// The result should also be ordered from highest to lowest.

// Examples:

// [4, 10, 10, 9]  =>  [10, 9]
// [1, 1, 1]  =>  [1]
// []  =>  []


//Mine:
function twoHighest(arr) {
  let sortedArr = [...new Set(arr.sort((a,b)=>a-b))]
  return sortedArr.length < 1 ? [] : sortedArr.length < 2 ? sortedArr : [sortedArr[sortedArr.length -1],sortedArr[sortedArr.length -2] ]
}


//Top Solution:
function twoHighest(arr) {
  return [...new Set(arr)].sort((a, b) => b - a).slice(0, 2)
}

//OR


//Test:
console.log(twoHighest([15, 20, 20, 17]))
console.log(twoHighest([1,1,1]))