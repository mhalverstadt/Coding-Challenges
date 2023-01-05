// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false


//mine:
function generateHashtag (str) {
    if(str.length === 0){
        return false
    }
    let newStr = str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join('')
    return newStr.length < 140 && newStr.length > 0 ? '#' + newStr : false
}

//another solution:
function generateHashtag (str) {
    var hashtag = str.split(' ').reduce(function(tag, word) {
      return tag + word.charAt(0).toUpperCase() + word.substring(1);
    }, '#');
    
    return hashtag.length == 1 || hashtag.length > 140 ? false : hashtag;
}

// test:
console.log(generateHashtag(" Hello there thanks for trying my Kata"))
console.log(generateHashtag("    Hello     World   "))
// console.log(generateHashtag(""))
// console.log(generateHashtag("      "))
// console.log(generateHashtag(" "))