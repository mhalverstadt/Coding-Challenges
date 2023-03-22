// Round any given number to the closest 0.5 step

// I.E.

// solution(4.2) = 4
// solution(4.3) = 4.5
// solution(4.6) = 4.5
// solution(4.8) = 5
// Round up if number is as close to previous and next 0.5 steps.

// solution(4.75) == 5


function solution(n){
    let splitNumber = String(n).split('.')
    let power = splitNumber[1].length
    let decimalNumber = +splitNumber[1] / (1 + '0'.repeat(power))
    return decimalNumber <= .25 ?  +splitNumber[0]: 
    decimalNumber >= .75 ? +splitNumber[0] + 1 : +splitNumber[0] + .5
}


//top solution:
function solution(n){
    return Math.round(n*2)/2;
  }



test:
console.log(solution(4.232))
console.log(solution(4.4))
console.log(solution(4.6))
console.log(solution(753.74999999))
