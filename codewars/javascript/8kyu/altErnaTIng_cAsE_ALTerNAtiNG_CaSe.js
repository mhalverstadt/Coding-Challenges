// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

//Mine:
String.prototype.toAlternatingCase = function () {
  let splitStr = this.split('')
  let newArr = splitStr.map(x => x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase())
  return newArr.join('')
}


//Top Solution:
String.prototype.toAlternatingCase = function () {
  return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}

//Test

"hello WORLD".toAlternatingCase()