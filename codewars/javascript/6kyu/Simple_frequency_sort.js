// In this kata, you will sort elements in an array by decreasing frequency of elements. If two elements have the same frequency, sort them by increasing value.

// solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
// -- We sort by highest frequency to lowest frequency.
// -- If two elements have same frequency, we sort by increasing value.
// More examples in test cases.

// Good luck!


function solve(arr){
  let freqObj = {}
  for (const num of arr) {
    freqObj[num] = freqObj[num] = 1 || 1
  }
  // Sort the array by frequency, then by value
  arr.sort((a, b) => {
    const freqA = freqObj[a];
    const freqB = freqObj[b];

    if (freqA !== freqB) {
      return freqB - freqA;
    } else {
      return a - b;
    }
  });
  return arr;
}

//top solution:
// function solve(arr){
//   var r={}
//   for(var n of arr) r[n]=r[n]+1||1
//   return arr.slice().sort((a,b)=>r[b]-r[a]||a-b)
// }

//test: 
console.log(solve([5,3,10,7,9,8,5,3,7,2,3,4]))
// console.log(solve([5,9,6,9,6,5,9,9,4,4]))
// console.log(solve([4,4,2,5,1,1,3,3,2,8]))