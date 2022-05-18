// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer

// Mine: 
function squareDigits(num){
  let splitString = num.toString().split('')
  let squared =[]
  for (let i = 0; i < splitString.length; i++){
    squared.push(splitString[i]**2)
  }
  return Number(squared.join(''))
}

//Top Solution:
function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
}
//OR
function squareDigits(num){
  return +num.toString().split('').map(i => i*i).join('');
}

//Test: 
