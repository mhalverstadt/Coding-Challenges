// You get an array of arrays.
// If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing!


// You have to write a method, that return the length of the missing array.

// Example:
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

// If the array of arrays is null/nil or empty, the method should return 0.

// When an array in the array is null or empty, the method should return 0 too!
// There will always be a missing element and its length will be always between the given arrays.



function getLengthOfMissingArray(arrayOfArrays) {
  if (arrayOfArrays === null || arrayOfArrays.length === 0 || arrayOfArrays.every(arr => Array.isArray(arr)) === false ) {
    return 0
  }
  let lengths = arrayOfArrays.map(arr => arr.length).sort((a,b) => a-b)
  if(lengths[0] === 0){
    return 0
  }
  console.log(lengths)
  for(let i = 0; i < lengths.length; i++){
    if(lengths[i] + 1 !== lengths[i + 1] && lengths[i] + 2 === lengths[i + 1]){
      return lengths[i] + 1
    }
  }
  return 0
}
 

//top soluion:
function getLengthOfMissingArray(arrayOfArrays) {
  const lengths = (arrayOfArrays || [])
    .map(a => a ? a.length : 0)
    .sort((a, b) => a - b)
  
  if (lengths.includes(0)) {
    return 0
  }
  for (let i = 0; i < lengths.length - 1; i++) {
    if (lengths[i] + 1 !== lengths[i + 1]) {
      return lengths[i] + 1
    }
  }
  return 0
}



//test:
// console.log(getLengthOfMissingArray([ [], [ 5, 6, 7]] ))
// console.log(getLengthOfMissingArray([ [ null ], [ null, null, null ] ] ))
console.log(getLengthOfMissingArray([[],[2],[3,4]]))