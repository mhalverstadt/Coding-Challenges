// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

// In honor of my grandfather's memory we will write a function using his formula!

// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.
// Example
// predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86

// Mine:
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    let squareAdd = [age1,age2,age3,age4,age5,age6,age7,age8].map(age=>age**2).reduce((a,b)=>a+b)
    return Math.trunc(Math.sqrt(squareAdd)/2)
  }


//Top Solution:
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    let arr = [age1, age2, age3, age4, age5, age6, age7, age8]
    return Math.floor(Math.sqrt(arr.map(a => a * a).reduce((b,c) => b + c)) / 2)
  }


//Test:
console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45))
