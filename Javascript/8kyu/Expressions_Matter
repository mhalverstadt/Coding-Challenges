// Task
// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained
// Consider an Example :
// With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:
// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// So the maximum value that you can obtain is 9.

//Mine:
function expressionMatter(a, b, c) {
  let allMultiply = a * b * c
  let multiplyAdd = a + b * c
  let parenthesesLast = a * (b + c)
  let parenthesesFirst = (a + b) * c
  let allAdd = a + b + c
  return Math.max(allMultiply, multiplyAdd, parenthesesLast, parenthesesFirst)
}


//Top Solution:
function expressionMatter(a, b, c) {
  return Math.max(
    a + b + c,
    a * b * c,
    a * (b + c),
    (a + b) * c,
    a + b * c,
    a * b + c,
  );
}


expressionMatter(1, 1, 1)