//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

// Mine:
function sumMix(x){
  let convertArr = x.map(x => Number(x))
  return convertArr.reduce((a,b) => a+b,0)
}

//Top Answer:
function sumMix(x){
  return x.map(a => +a).reduce((a, b) => a + b);
}

//Example input:
// sumMix([9, 3, '7', '3'])