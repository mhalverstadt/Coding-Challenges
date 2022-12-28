// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"



//mine:
function toCamelCase(str){
    if(str.length === 0){
        return str
    }
    let arr = str.split(/[-_]+/g)
    let joined = arr.map(word => word[0].toUpperCase() + word.slice(1)).join('')
    return str[0] === str[0].toUpperCase() ? joined : joined[0].toLowerCase() + joined.slice(1)
}

//top solution:
function toCamelCase(str){
    var regExp=/[-_]\w/ig;
    return str.replace(regExp,function(match){
          return match.charAt(1).toUpperCase();
     });
}


// test:
console.log(toCamelCase("The_Stealth_Warrior"))
console.log(toCamelCase("the-stealth-warrior"))