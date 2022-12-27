// Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

// Assumptions:
// A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
// Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
// Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
// Matches should be case-insensitive, and the words in the result should be lowercased.
// Ties may be broken arbitrarily.
// If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.
// Examples:
// top_3_words("In a village of La Mancha, the name of which I have no desire to call to
// mind, there lived not long since one of those gentlemen that keep a lance
// in the lance-rack, an old buckler, a lean hack, and a greyhound for
// coursing. An olla of rather more beef than mutton, a salad on most
// nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
// on Sundays, made away with three-quarters of his income.")
// # => ["a", "of", "on"]

// top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
// # => ["e", "ddd", "aa"]

// top_3_words("  //wont won't won't")
// # => ["won't", "wont"]
// Bonus points (not really, but just for fun):
// Avoid creating an array whose memory footprint is roughly as big as the input text.
// Avoid sorting the entire array of unique words.

//mine:
function topThreeWords(text){
    let noSpecialChar = text.replace(/[^a-zA-Z ']/g, '')
    let arr = noSpecialChar.split(' ').map(word => word.toLowerCase()).filter(Boolean).filter(x => x !== '\'')
    console.log(arr)
    if(arr.length < 1){
        return []
    }
    let wordMap ={}
    let result = []
    for(word of arr){
        wordMap[word] = wordMap[word] +1 || 1 
    }
    for(word in wordMap){
        result.push([word, wordMap[word]])
    }
    result.sort((a,b) => b[1] - a[1])
    if(result.length < 2){
        return [result[0][0]]
    }else if (result.length < 3){
        return [result[0][0], result[1][0]]
    }
    return [result[0][0], result[1][0], result[2][0]]
}

//top solution:
let topThreeWords = text => {
    let dict = new Map();
    text.replace(/[A-z']+(?=[ ]+|$)/g, match => {
        let word = match.toLowerCase();
        dict.set(word, dict.has(word) ? dict.get(word) + 1 : 1);
    });
    dict.delete("'");
    return [...dict].sort((a, b) => b[1] - a[1]).map(a => a[0]).slice(0, 3);
};

//OR:
function topThreeWords(text) {
    let words = {}
    text.toLowerCase().replace(/([A-Za-z][A-Za-z']*)/g, match => {
      let c = words[match] || 0
      words[match] = ++c
    })
    return Object
            .keys(words)
            .sort(function(a,b){return words[b]-words[a]})
            .slice(0,3)
  }

//test:
// console.log(topThreeWords("a a a b  c c  d d d d won't  e e e e e"), ['e','d','a'])
console.log(topThreeWords("   ' '  ' "))
// console.log(topThreeWords("  //wont won't won't "), ["won't", "wont"])