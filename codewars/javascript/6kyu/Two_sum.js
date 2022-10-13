// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: http://oj.leetcode.com/problems/two-sum/

// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]

//Mine:
function twoSum(numbers, target) {
    let result = []
    for(let i = 0; i < numbers.length; i++){
        for(let y = 1; y < numbers.length; y++){
            if(numbers[i] + numbers[y] === target){
                result.push(numbers.indexOf(numbers[i]), numbers.lastIndexOf(numbers[y]))
            }
        }
    }
    return result.slice(0,2)
  }

//Top Solution:
function twoSum(numbers, target) {
    for (var i = 0; i < numbers.length-1; i++) {
        for (var j = i+1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) return [i, j];
        }
    }
}

//Test:
console.log(twoSum([1, 2, 3], 4))
console.log(twoSum([2, 2, 3], 4))
console.log(twoSum([381, 180, -712, -327, -376, 284, 846, -687, -643, -577, -346, -862, 514, -316, 363, -419, 734, 365, -8, 531, 27, 607], 4),726)