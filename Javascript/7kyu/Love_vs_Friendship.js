// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice as strong as love :-)

// Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

// The input will always be made of only lowercase letters and will never be empty.

//Mine:
function wordsToMarks(string){
  let alpha = 'abcdefghijklmnopqrstuvwxyz'
  let numsArry = string.split('').map(char=>alpha.indexOf(char)+1)
  return numsArry.reduce((a,b)=>a+b,0)
}
//Top Solution:
const wordsToMarks = s => [...s].reduce((res, c) => res += c.charCodeAt() - 96, 0)

//Test:
console.log(wordsToMarks("attitude"))