// Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.

// Only numbers without decimals like 4 or 4.0 can be even.

// The input is a sequence of numbers: integers and/or floats.

// Examples
// [4, 3, 1, 2, 5, 10, 6, 7, 9, 8]  -->  30   # because 4 + 2 + 10 + 6 + 8 = 30
// []                               -->  0



function sumEvenNumbers(input){
  let filterArr = input.filter(num => num % 2 === 0)
  return filterArr.length === 0 ? 0 : filterArr.reduce((a,b)=> a+b, 0)
}

//top solution:
sumEvenNumbers = input => input.filter(x => x % 2 == 0).reduce((x, y) => x + y, 0)


console.log(sumEvenNumbers([1,3]))
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))