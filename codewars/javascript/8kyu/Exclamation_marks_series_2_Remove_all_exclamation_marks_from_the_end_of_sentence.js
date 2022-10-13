// Remove all exclamation marks from the end of sentence.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

// //Mine:
function remove (string) {
    let reverseString = string.split('').reverse()
    return (reverseString.slice(`${reverseString.findIndex(x => x !== '!')}`).reverse().join(''))
}
// Top Solution:
const remove = s => s.replace(/!+$/, '');


//OR:
function remove(s)
{
    while(s && s.slice(-1) == "!") 
    { 
        s = s.slice(0,-1) 
    }
    return s;
}

// //Test:
console.log (remove("Hi! Hi!"))
console.log (remove("!Hi!!!"))