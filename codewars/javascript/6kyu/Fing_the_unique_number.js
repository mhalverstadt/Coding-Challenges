// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique

//Mine:
function findUniq(arr) {
  result = {}
  for(const num of arr){
    result[num] = result[num] ? result[num] += 1 : 1
  }
  for (const key in result){
    if(result[key] === 1)
      return Number(key)
  }
}


//Top Solution:
function findUniq(arr) {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}

//OR:
 


//Test:
findUniq([ 3, 1, 2, 1, 10, 3, 3, 2, 3 ])
findUniq([1,1,2,2,3,4,4])
