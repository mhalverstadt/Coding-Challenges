// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
// For example:
// a = 1
// b = 4 //[1, 2, 3, 4]

// Mine: 
function between(a, b) {
  let numsBetween = []
  for (let i = a; i <= b; i++){
     numsBetween.push(i)
  }
  return numsBetween
}

//Top Solution:
function between(a, b) {
  // your code here
  arr = []
  for(i = a;i <= b; i++){ 
      arr.push(i)
  }
  return arr
}

  
//Test: 
between(1, 4)