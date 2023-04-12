// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)
// Note: there are no special characters used, only letters and spaces

// Examples

// decipherThis('72olle 103doo 100ya'); // 'Hello good day'
// decipherThis('82yade 115te 103o'); // 'Ready set go'

//mine
function decipherThis(str) {
    let arr = str.split(' ')
    return arr.map((word) => {
        if(!isNaN(+word)) return String.fromCharCode(+word)
        let numIdx
        for(let i = 1; i < word.length; i++){
            if(!isNaN(+word[i])){
                numIdx = i
            }
        }
        let firstLetter = String.fromCharCode(word.slice(0, numIdx + 1))
        let secondLetter = word[word.length - 1]
        let lastLetter = word[numIdx + 1]
        return `${firstLetter}${secondLetter}${word.slice(numIdx + 2, word.length -1)}${word[numIdx + 2] === undefined ? '' : lastLetter}`
    }).join(' ')
};

//top solution with no regex:
const decipherThis = text => text
    .split(' ')
    .map(e => {
        const num = parseFloat(e) || '';
        const word = e.split(num)[1];
        if (word.length === 1) return String.fromCharCode(num) + word;
        return String.fromCharCode(num) + word.slice(-1) + word.slice(1, -1) + word.slice(0, 1);
    })
    .join(' ')

//test:
console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'))