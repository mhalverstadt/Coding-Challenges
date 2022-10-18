// DESCRIPTION:
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of projecteuler.net (Problem 1)

////////////////////////////////////////////////////////////////////

//Mine:
function solution(number){
  if(number < 1){
    return 0
  }
  let arr = [...Array(number).keys()]
  let multiplesArr = []
  for(num of arr){
    if(num % 15 === 0){
        multiplesArr.push(num)
    }else if(num % 5 === 0 || num % 3 === 0){
        multiplesArr.push(num)
    }
  }
  return multiplesArr.reduce((a,b)=>a+b)
}

//Top Solution:
function solution(number){
    var sum = 0;
    
    for(var i = 1;i< number; i++){
      if(i % 3 == 0 || i % 5 == 0){
        sum += i
      }
    }
    return sum;
  }

//Test:
console.log(solution(10),23)

