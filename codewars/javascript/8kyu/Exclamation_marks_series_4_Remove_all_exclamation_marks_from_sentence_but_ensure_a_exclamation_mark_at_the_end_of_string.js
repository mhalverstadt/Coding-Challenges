// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

// Examples
// remove("Hi!") === "Hi!"
// remove("Hi!!!") === "Hi!"
// remove("!Hi") === "Hi!"
// remove("!Hi!") === "Hi!"
// remove("Hi! Hi!") === "Hi Hi!"
// remove("Hi") === "Hi!"

//Mine:
function remove (string) {
  return string.split('').filter(x=>x!=='!').join('') + '!'
}

//Top Solution:
const remove = s => s.replace(/!+/g, "")+"!";


//Test: 
console.log(remove("Hi! Hi!"))