// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:
// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

// Example 2:
// Input: jewels = "z", stones = "ZZ"
// Output: 0
 
// Constraints:
// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.

/////////////////////

//input: two strings, case sensitive, 
//return: number

//mine:
function numJewelsInStones(jewels, stones){
  let counter = 0
  for(char of stones){
    if(jewels.includes(char)){
      counter++
    }
  }
  return counter
}

//solution with map:
// var numJewelsInStones = function(jewels, stones) {
//   const map = {}
//  let count = 0

//  for (let char of jewels) {
//      map[char] = true
//  }

//  for (let char of stones) {
//      if (map[char]) {
//          count++
//      }
//  }
//  return count;
// };



//test: 
console.log(numJewelsInStones("aA", "aAAbbbb"), '3')
console.log(numJewelsInStones("aAb", "aAcAcbbcbbc"), '7')
console.log(numJewelsInStones("", ""), '0')