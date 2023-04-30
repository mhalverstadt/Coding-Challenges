
// Task
// You will receive an array as parameter that contains 1 or more integers and a number n.
// Here is a little visualization of the process:
// Step 1: Split the array in two:

// [1, 2, 5, 7, 2, 3, 5, 7, 8]
//       /            \
// [1, 2, 5, 7]    [2, 3, 5, 7, 8]
// Step 2: Put the arrays on top of each other:

//    [1, 2, 5, 7]
// [2, 3, 5, 7, 8]
// Step 3: Add them together:

// [2, 4, 7, 12, 15]
// Repeat the above steps n times or until there is only one number left, and then return the array.

// Example
// Input: arr=[4, 2, 5, 3, 2, 5, 7], n=2

// Round 1
// -------
// step 1: [4, 2, 5]  [3, 2, 5, 7]

// step 2:    [4, 2, 5]
//         [3, 2, 5, 7]

// step 3: [3, 6, 7, 12]

// Round 2
// -------
// step 1: [3, 6]  [7, 12]

// step 2:  [3,  6]
//          [7, 12]

// step 3: [10, 18]

// Result: [10, 18]


//mine:
function splitAndAdd(arr, n) {
  if(n === 0) return arr
  if(arr.length === 1) return arr
  const midPoint = Math.floor(arr.length/2)
  const arr1 = arr.slice(0, midPoint)
  const arr2 = arr.slice(midPoint)
  let result

  if(arr1.length === arr2.length){
    result = arr1.map((num, i) => num + arr2[i])
  }else{
    result = arr1.map((num, i) => num + arr2[i + 1]) 
    result.unshift(arr2[0])
  }

  if(n === 1){
    return result
  }else{
    return splitAndAdd(result, n-1)
  }
}

//top solution:
function splitAndAdd(arr, n) {
  if (n <= 0)
    return arr;

  const ln = arr.length;
  if ((ln % 2) === 1)
    arr.unshift(0);

  return splitAndAdd(arr.splice(0, Math.ceil(ln / 2)).map((a, i) => a + arr[i]), n-1);
}


//test:
console.log(splitAndAdd([1, 2, 5, 7, 2, 3, 5, 7, 8], 1))
// console.log(splitAndAdd([1,2,3,4,5], 3))
// console.log(splitAndAdd([32,45,43,23,54,23,54,34], 2))