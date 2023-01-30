// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"


// mine:
function toWeirdCase(string){
    let result = []
    for(word of string.split(' ')){
        let newWord = ''
        for(let i = 0; i < word.length; i++){
            newWord += i % 2 === 0 ? word[i].toUpperCase() : word[i].toLowerCase()
        }
        result.push(newWord)
    }
    return result.join(' ')
}


//top solution (this is nested loops like mine):
function toWeirdCase(string){
    return string.split(' ').map(function(word){
      return word.split('').map(function(letter, index){
        return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
      }).join('');
    }).join(' ');
  }

//OR:
function toWeirdCaseCharacter(chr, index)
{
  return index % 2 ? chr.toLowerCase() : chr.toUpperCase();
}

function toWeirdCaseWord(word){
  return word.split("").map(toWeirdCaseCharacter).join("");
}

function toWeirdCase(string){
  return string.split(" ").map(toWeirdCaseWord).join(" ");
}

//OR:
function toWeirdCase(string){
    let newStr = '';
    let count = 0;
    for (var i=0; i<string.length; i++){
      if(string.charAt(i) === ' ') count = -1;
      newStr += count%2 ? string.charAt(i).toLowerCase() : string.charAt(i).toUpperCase();
      count++;
    }
    return newStr;
}

// test:
console.log(toWeirdCase('Weird string case'))
console.log(toWeirdCase('Hi There'))