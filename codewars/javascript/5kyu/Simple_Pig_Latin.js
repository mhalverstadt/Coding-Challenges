// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

//note: punctuation comes as it's own word!


//mine:
function pigIt(str){
    return str.split(' ').map(word => {
        if(!word.match(/[a-zA-Z]/)){
            return word
        }
        if(word.match(/[a-zA-Z]/)){
            return word.slice(1) + word[0] + 'ay'
        }
    }).join(' ')
}

//better:
// messed up kata...top solutions don't pass punctuation tests. 

//test:
console.log(pigIt('This is my string !'))
console.log(pigIt('which way to the car'))
