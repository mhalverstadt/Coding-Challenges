// DESCRIPTION:
// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
// More examples in test cases. Good luck!

////////////////////////////////////////////////////
//input: will always be a string of letters, no special characters or numbers. never empty.

//return the string with all the same case based on chaning the fewest amount of letters, if equal return lowercase string. 

//create a counter for both upper and lower cases// or object to count instances. iterate through string and count
//see which count is larger and change string based on criteria. 

function solve(s) {
    let caseMap = {
      upperCase: 0,
      lowerCase: 0
    }
    s.split('').forEach(char => char.toUpperCase() === char ? caseMap.upperCase += 1 : caseMap.lowerCase += 1)
    return caseMap.lowerCase >= caseMap.upperCase ? s.toLowerCase() : s.toUpperCase()
  }
  
  console.log(solve('coDE'))