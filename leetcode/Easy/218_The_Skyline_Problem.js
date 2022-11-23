// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true


//Mine:
var containsDuplicate = function(nums) {
    let storage = []
    for(n of nums){
        if(storage.includes(n)){
            return true
        }else{
            storage.push(n)
        }
    } 
    return false
};

//Top Solution:
const containsDuplicate = function (nums) {
    const hashTable = {};

    for (let i = 0; i < nums.length; i++) {
        if (hashTable[nums[i]] !== undefined) {
            return true;
        }
        hashTable[nums[i]] = i;
    }

    return false;
};


console.log(containsDuplicate([3,3]))