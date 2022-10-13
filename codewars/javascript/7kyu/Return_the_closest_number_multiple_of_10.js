// Given a number return the closest number to it that is divisible by 10.

// Example input:

// 22
// 25
// 37
// Expected output:

// 20
// 30
// 40

//Mine:
const closestMultiple10 = num => {
  padlength = String(Math.round(num)).length
  return Number(String(Math.round(num / 10)).padEnd(padlength,'0'))
}
//Top Solution:
const closestMultiple10 = num => Math.round(num / 10) * 10;

//Test: 
console.log(closestMultiple10(1679.323))
  