// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// Addendum:

// Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:

// http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well

//Mine:
function flattenAndSort(array) {
    filteredArray = array.filter(x=>x.length !== 0)
    return filteredArray.length === 0 ? [] : filteredArray.join(',').split(',').map(x=>Number(x)).sort((a,b)=>a-b)
  }

//Top Solution:
function flattenAndSort(array) {
    return [].concat(...array).sort((a,b) => a - b);
  }

//ALSO WORKS: 
function flattenAndSort(array) {
    return array.flat().sort((a,b)=>a-b)
  }

//Test: 
console.log(flattenAndSort([[1, 3, 5], [100], [], [2, 4, 6]]))
console.log(flattenAndSort([]))
console.log(flattenAndSort([[],[]]))