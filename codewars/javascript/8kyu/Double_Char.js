//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "


//Mine:
function doubleChar(str) {
  let newString = str.split('')
  let finalString = []
  for (i = 0; i < newString.length; i++){
    finalString.push(newString[i] + newString[i])
  }
  return finalString.join('')
}

//Top Solution:
const doubleChar = (str) => str.split("").map(c => c + c).join("");

doubleChar("illuminati")


