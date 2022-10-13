// Description:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi!!"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

//Mine:
function remove (string) {
	return string.charAt(string.length - 1) === '!' ? string.split('').slice(0, string.length -1).join('') : string
}
//Top Solution:
function remove(s) {
  return s.endsWith('!') ? s.slice(0, -1) : s;
}


//Test:
remove('Hi!')
remove('hi!!')