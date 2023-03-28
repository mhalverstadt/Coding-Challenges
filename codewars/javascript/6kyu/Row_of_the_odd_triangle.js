// Given a triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// find the triangle's row knowing its index (the rows are 1-indexed), e.g.:

// odd_row(1)  ==  [1]
// odd_row(2)  ==  [3, 5]
// odd_row(3)  ==  [7, 9, 11]
// Note: your code should be optimized to handle big inputs.


function oddRow(n) {
  let rowStart = []
  let result = []
  let step = 0
  for(let i = 1; rowStart.length < n; i){
    rowStart.push(i)
    step += 2
    i += step
  }
  for(let i = rowStart[rowStart.length - 1]; result.length < n; i += 2){
    result.push(i)
  }
  return result
}

//top solution:
function oddRow(n) {
  return Array(n).fill(0).map((_,i)=>n*n-n+1+i*2);
}

//test:
console.log(oddRow(3))
console.log(oddRow(4))
console.log(oddRow(5))