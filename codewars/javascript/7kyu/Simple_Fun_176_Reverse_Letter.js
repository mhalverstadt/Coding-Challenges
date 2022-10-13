// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string
//Mine:
function reverseLetter(str) {
    let arr =  str.split('')
    return arr.filter(x=>x.match((/[a-zA-Z]+/g))).reverse().join('')
}

//Top Solution:
reverseLetter=(s)=>s.replace(/[^a-z]/gi,'').split('').reverse().join('');



// Test:
console.log(reverseLetter("krish34an"))