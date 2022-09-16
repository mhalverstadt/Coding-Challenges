// DESCRIPTION:
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!


//Mine:
function capitalize(s){
    let even = []
    let odd = []
    const arr = s.split('')
    arr.map((l,i)=>{
        if(i === 0 || i % 2 === 0){
            even.push(l.toUpperCase())
            odd.push(l.toLowerCase())
        }else if(i % 2 === 1){
            even.push(l.toLowerCase())
            odd.push(l.toUpperCase())
        }
    })
    return [even.join(''), odd.join('')]
};


//Top Solution:
function capitalize(s){
    const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
    const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
    return [even, odd];
  };

// Test:
console.log(capitalize("abcdef"))