// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


// Mine: 
function solution(str){
  return str.split('').reverse().join('')
}

//Top Solution:
const solution = str => str.split('').reverse().join('');


  
//Test: 
strictEqual(solution('world')