// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// More examples in the test cases.



////////////////////////////////////////////////////////////////////

//input is an array of numbers, always nums, with all occurring twice except for two. 

//return sum of the two that only occur once. 

//mine:
function sumOfSingles(arr){
  //iterate through the array and collect the two numbers that occure once. 
  let result = []
  for(num of arr){
    if (arr.indexOf(num) === arr.lastIndexOf(num)){
      result.push(num)
    }
  }
  return result[0] + result [1]
}

//Top Solution:
function repeats(arr){
  return arr.filter(v => arr.indexOf(v) === arr.lastIndexOf(v)).reduce((a,b) => a + b, 0);
};

console.log(sumOfSingles([1,1,2,2,3,3,4,5]), 9)
console.log(sumOfSingles([2,3,4,5,7,2,3,4,5,8]), 15)
console.log(sumOfSingles([0, -1, -2, 0, 2, -2, -1, 18]), 20)
