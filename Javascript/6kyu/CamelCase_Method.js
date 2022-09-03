// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord

//Mine:
String.prototype.camelCase=function(str){
    return this.length === 0 ? "" : this.trim().split(' ').map(word=> `${word[0].toUpperCase()}${word.slice(1)}`).join('')
}



//Top Solution:


// Test:
console.log(camelCase("camel case method"))