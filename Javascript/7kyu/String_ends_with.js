// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false


//Mine:
function solution(str, ending){
  strEnd = str.slice(-(ending.length))
  return ending.length === 0 ? true : ending === strEnd
}

//Top Solution:
function solution(str, ending){
  return str.endsWith(ending);
}


//Test:
solution('abcde', 'cde')
solution('hello', '')
solution('abcde', 'abc')