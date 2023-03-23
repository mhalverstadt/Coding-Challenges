// Remove the parentheses
// In this kata you are given a string for example:

// "example(unwanted thing)example"
// Your task is to remove everything inside the parentheses as well as the parentheses themselves.

// The example above would return:

// "exampleexample"
// Notes
// Other than parentheses only letters and spaces can occur in the string. Don't worry about other brackets like "[]" and "{}" as these will never appear.
// There can be multiple parentheses.
// The parentheses can be nested.


//mine:
function removeParentheses(s){
  let arr = s.split('')
  while(arr.indexOf(')') !== -1){
    let start = arr.indexOf('(')
    let end 
    if(arr.indexOf(')') < arr.indexOf('(', start + 1)){
      end = arr.indexOf(')')
    }else{
      let openParenthsCounter = 0
      for(let i = start; i < arr.length; i++){
        if(arr[i] === '('){
          openParenthsCounter++
        }else if(arr[i] === ')'){
          openParenthsCounter--
        }
        if(openParenthsCounter === 0){
          end = i
          break;
        }
      }
    }
    arr.splice(start, (end - start + 1))
  }
  return arr.join('')
}


//top solution
function removeParentheses(s){
  let result = "";
  let count = 0;
  for (let letter of s){
    if (letter == "(") count += 1;
    if (count == 0) result += letter;
    if (letter == ")") count -= 1
  }
  return result
}


//test:
console.log(removeParentheses("a (bc d)e"))
console.log(removeParentheses("a(b(c))"))
console.log(removeParentheses("hello example (words(more(more) words) here) test(dfs) something"))
console.log(removeParentheses("(first group)a(second group)a(third group(d(d)))"))