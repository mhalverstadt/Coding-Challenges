// All Star Code Challenge #18

// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// Notes:

// The first argument can be an empty string
// The second string argument will always be of length 1

//Mine:
function strCount(str, letter){  
  let charCount = 0
  let splitStr = str.split('')
  for(i = 0; i <= splitStr.length; i++){
    if (splitStr[i] === letter){
      charCount++
    }
  }
  return charCount
}


//Top Solution:
function strCount(str, letter){  
  return str.split(letter).length-1
}
//OR
function strCount(str, letter){  
  return str.split('').filter(c => c == letter).length;
}

//Test
strCount('Hello', 'l')

