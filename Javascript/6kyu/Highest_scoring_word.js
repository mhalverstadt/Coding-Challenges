// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.


//Mine:
function high(x){
    let score = word => word.split('').map(x=>x=alph.indexOf(x)+1).reduce((a,b)=>a+b)
    let highWord = []
    const alph = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const arr = x.split(' ')
    for(let i = 0; i < (arr.length); i++){
        highWord.push(score(arr[i]))
    }
    return arr[highWord.indexOf(Math.max(...highWord))]
}


//Top Solution:
function high(s){
    let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
    return s.split(' ')[as.indexOf(Math.max(...as))];
  }


//Test: 
console.log(high('man i need a taxi up to ubud'))
console.log(high('what time are we climbing up the volcano'))