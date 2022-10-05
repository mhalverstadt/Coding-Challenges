// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

// Mine:
function switcheroo(x){
    return [...x].map(char => char === 'a' ? 'b' : char === 'b' ? 'a' : 'c').join('')
}

//Top Solution:
const switcheroo=x=>x.replace(/[ab]/g,x=>x=="a"?"b":"a")


//Test:
console.log(switcheroo('acb'))