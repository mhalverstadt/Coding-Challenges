// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109

//////////////////////////////////////////////////////

//mine:

// function majorityElement(nums){
//     const elementMap = {}
//     for(n of nums){
//         elementMap[n] ? elementMap[n]++ : elementMap[n] = 1
//     }
//     console.log(elementMap)
//     return Object.keys(elementMap).find(key => elementMap[key] > nums.length / 2)
// }

function majorityElement(nums){
        const elementMap = {}
        let majorityKey = 0
            keyValue = 0
        for(n of nums){
            elementMap[n] ? elementMap[n]++ : elementMap[n] = 1
        }
        console.log(elementMap)
        for (key in elementMap){
            if(elementMap[key] > keyValue){
                majorityKey = key
                keyValue = elementMap[key]
            }
        }
        return majorityKey
    }

console.log(majorityElement([2,2,1,1,1,2,2]))
console.log(majorityElement([3,2,3]))
console.log(majorityElement([3,3,4,2,4,4]))