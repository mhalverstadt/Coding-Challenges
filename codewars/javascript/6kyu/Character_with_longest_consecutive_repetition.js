// For a given string s find the character c (or C) with longest consecutive repetition and return:

// [c, l]
// where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

// For empty string return:

// ["", 0]
// In JavaScript: If you use Array.sort in your solution, you might experience issues with the random tests as Array.sort is not stable in the Node.js version used by CodeWars. This is not a kata issue.


//mine:
function longestRepetition(s) {
  if(s.length < 1){
    return ["", 0];
  }
  let counts = {}
  for(let i = 0; i < s.length; i++){
    let char = s[i]
    if(char in counts && s[i] === prevChar){
      counts[char]++
    }else{
      counts[char] = 1
    }
    prevChar = char
  }
  let most = (Math.max(...Object.values(counts)))
  return [Object.keys(counts).find(key => counts[key] === most), most]
}




//test:
console.log(longestRepetition("bbbaaabaaaa"))
console.log(longestRepetition("cbdeuuu900"))