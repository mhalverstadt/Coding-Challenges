// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100


//mine:
function validParentheses(parens){
    let stack = []
    for(char of parens){
        if(char === '('){
            stack.push(char)
        }else if(stack.pop() !== '('){
            return false
        }
    }
    return stack.length === 0
}

//top solution:
function validParentheses(parens){
    var n = 0;
    for (var i = 0; i < parens.length; i++) {
      if (parens[i] == '(') n++;
      if (parens[i] == ')') n--;
      if (n < 0) return false;
    }
    
    return n == 0;
  }


// test:
console.log(validParentheses("(())((()())())"))
console.log(validParentheses(""))
console.log(validParentheses("("))
console.log(validParentheses(")"))
console.log(validParentheses("(())((()())())("))