// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


//Mine:
function XO(str) {
  let exes = []
  let ohs = []
  let arr = str.toUpperCase().split('')
  arr.forEach(x => {
    if(x === 'X'){
      exes.push(x)
    }else if(x === 'O')
      ohs.push(x)
  })
  return exes.length === ohs.length
}


//Top Solution: 
const XO = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}



//Test:
XO("xxOo")