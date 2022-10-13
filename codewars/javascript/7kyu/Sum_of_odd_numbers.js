// //    

// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8



//Mine:
function rowSumOddNumbers(n) {
  let result = []
  let start = n**2 - (n-1)
  for(let i = start; result.length < n; i+=2){
    result.push(i)
  }
  return result.reduce((a,b)=>a+b)
}

//Top Solution:
function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}

//Test:
rowSumOddNumbers(42)
// rowSumOddNumbers(4)
rowSumOddNumbers(1)
rowSumOddNumbers(2)