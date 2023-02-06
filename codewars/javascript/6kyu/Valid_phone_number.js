// Write a function that accepts a string, and returns true if it is in the form of a phone number.
// Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

// Only worry about the following format:
// (123) 456-7890 (don't forget the space after the close parentheses)

// Examples:

// "(123) 456-7890"  => true
// "(1111)555 2345"  => false
// "(098) 123 4567"  => false

function validPhoneNumber(phoneNumber){
    if(phoneNumber.length !== 14){
        return false
    }
    for(let idx = 0; idx < 14; idx++){
        if(phoneNumber[0] !== '('){
            return false
        }else if(phoneNumber[4] !==')'){
            return false
        }else if(phoneNumber[5] !== ' '){
            return false
        }else if(phoneNumber[9] !== '-'){
            return false
        }else if(typeof +phoneNumber[idx] !== 'number'){
            return false
        }
    }
    return true
}

//top solution:
function validPhoneNumber(str) {

    if (str.length !== 14) {
      return false;
    }
    if (str[4] !== ")") {
      return false;
    }
    if (str[5] !== " ") {
      return false;
    }
    if (str[9] !== "-") {
      return false;
    } else {
      return true;
    }
  }

//test:
console.log(validPhoneNumber("(123) 456-7890"))
console.log(validPhoneNumber("3123) 456-7890"))