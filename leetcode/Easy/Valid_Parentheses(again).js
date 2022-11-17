// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// Constraints:
// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

//input: strings with only bracket characters, nothing else, no spaces. 

  //iterate through the string as an array. 
  //store open brackets in another array. 
  //if closed bracket check open bracket stack to check if coresponding open is on top
  //if it is pop open bracket off top
  //true if our stack length is 0

  //My Solution:
function isValid(s){
  let stack = []
  for(let i = 0; i < s.length; i++){
    if(s[i] === '(' || s[i] === '[' || s[i] === '{'){
      stack.push(s[i])
    }else{
      if(s[i] === ')' && stack[stack.length -1] === '('){
        stack.pop()
      }else if(s[i] === ']' && stack[stack.length -1] === '['){
        stack.pop()
      }else if(s[i] === '}' && stack[stack.length -1] === '{'){
        stack.pop()
      }else{
        return false
      }
    }
  }
  return stack.length === 0
}

//Other Solution:
var isValid = function(s) {   
  const stack = [];
  
  for (let i = 0 ; i < s.length ; i++) {
      let c = s.charAt(i);
      switch(c) {
          case '(': stack.push(')');
              break;
          case '[': stack.push(']');
              break;
          case '{': stack.push('}');
              break;
          default:
              if (c !== stack.pop()) {
                  return false;
              }
      }
  }
  
  return stack.length === 0;
};

console.log(isValid('()[]{}'), true)
console.log(isValid('([]){}'), true)
console.log(isValid('([])}'), false)
console.log(isValid('([{])}'), false)
