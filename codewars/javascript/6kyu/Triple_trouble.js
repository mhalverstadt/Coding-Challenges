// tripledouble(num1,num2)
// which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

// If this isn't the case, return 0

// Examples
// tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
//                                           // num2 has straight double 99s

// tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

// tripledouble(12345, 12345) == 0

// tripledouble(666789, 12345667) == 1

function tripledouble(num1, num2) {
  let triple = {}
  let numString = String(num1)
  let numString2 = String(num2)
  for(let i = 0; i < numString.length; i++){
    if(numString[i] === numString[i+1] && numString[i] === numString[i+2]){
      triple[numString[i]] = true
    }
  }
  console.log(triple)
  for(let i = 0; i < numString2.length; i++){
    if(numString2[i] === numString2[i+1] && numString2[i] in triple){
      return 1
    }
  }
  return 0
}

//non Regex solution:
function tripledouble(num1, num2) {
  let nums = [...Array(10).keys()];
  return +nums.some(num => 
    num1.toString().includes(num.toString().repeat(3)) &&
    num2.toString().includes(num.toString().repeat(2))
  );
}


// test:
console.log(tripledouble(451999277, 41177722899))
console.log(tripledouble(169148999999222430, 343763999944))
console.log(tripledouble(169148999922430, 343763944))