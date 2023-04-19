// For a given string s find the character c (or C) with longest consecutive repetition and return:

// [c, l]
// where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

// For empty string return:

// ["", 0]



//mine:
function longestRepetition(s) {
  if(s.length < 1){
    return ["", 0];
  }
  let prevChar
  let result = [s[0], 1]
  for(let i = 0; i < s.length; i++){
    let char = s[i]
    if(s[i] === prevChar){
      let j = i
      let count = 1
      while(s[j] === s[i]){
        count++
        if(count > result[1]){
          result[0] = char
          result[1] = count
        }
        j++
      }
    }
    prevChar = char
  }
  return result
}

//top solution:
function longestRepetition(s) {
  let count = 0;
  let prevLetter = '';
  
  return s.toLowerCase().split('').reduce((acc, curr) => {
    if(curr === prevLetter){
      count++;
    }
    else{
      count = 1;
    }

    if(count > acc[1]){
      acc[1] = count;
      acc[0] = curr;
    }

    prevLetter = curr;
    return acc;
  }, ['', 0]);
}

//or:
const longestRepetition = s => {
  let max = 0;
  let char = ''; 
  for (let i = 1, l = s.length, c = 1; i <= l; i++) {
    if (s[i] === s[i - 1]) c++;
    else {
      if (c > max) {
        max = c;
        char = s[i - 1];   
      }
      c = 1;
    }
  }
  return [char, max];
}

//tests:
console.log(longestRepetition("aaaa"))
