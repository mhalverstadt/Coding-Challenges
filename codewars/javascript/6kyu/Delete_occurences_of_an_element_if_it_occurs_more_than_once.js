// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

// -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
// solve("zodiacs") = 26

// For the word "strength", solve("strength") = 57
// -- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.

///////////////
//input: string of only letters no spaces, case senitive?
//return: number representing largest run of letters that don't contain vowels


//split string based on vowels
//convert string to index of alphabet +1
//add up individual strings
//return largest number

//Mine:
function solve(s) {
  let alphIndex = '0abcdefghijklmnopqrstuvwxyz'
  let vowelIndex = [1,5,9,15,21]
  let numbers = s.split('').map(char => alphIndex.indexOf(char))
  let subArrays = []
  let subArr = []
  console.log(numbers)
  for(const n of numbers){
    if(vowelIndex.includes(n)){
      subArrays.push(subArr)
      subArr = []
    }else{
    subArr.push(n)
    }
  }
  subArrays.push(subArr)
  console.log(subArrays)
  return Math.max(...subArrays.filter(x => x.length > 0).map(sub => sub.reduce((a,b)=>a+b)))
};

//Top Solution:
function solve(s) {
  let highest = 0
  let sum = 0
  
  for (const char of s) {
    if (isConsonant(char)) {
      sum += getValue(char)
      
      if (highest < sum) {
          highest = sum
      }
    } else {
      sum = 0
    }
  }  
  
  return highest
};

function getValue(char) {
  return char.charCodeAt(0) - 97 + 1
}

function isConsonant(char) {
  return !'aeiou'.includes(char)
}

//Test:
console.log(solve("strength"))
console.log(solve("zodiac"))
console.log(solve("chruschtschov"))