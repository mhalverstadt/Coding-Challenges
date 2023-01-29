// DESCRIPTION:
// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD


function alternateCase(s) {
    let result = ''
    for(let letter of s){
        result += letter.toUpperCase() === letter ? letter.toLowerCase() : letter.toUpperCase()
    }
    return result
}

//top solution:
function alternateCase(s) {
    return s.split('').map(function(el) {
      return el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase();
    }).join('');
  }

//test:
console.log(alternateCase('abc'))