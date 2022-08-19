// You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

// Input:

// If, you can read?

// Output:

// India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

// Note:

// There are preloaded dictionary you can use, named NATO
// The set of used punctuation is ,.!?.
// Punctuation should be kept in your return string, but spaces should not.
// Xray should not have a dash within.
// Every word and punctuation mark should be seperated by a space ' '.
// There should be no trailing whitespace

//Mine:
function to_nato(words) {
    let nato = {
        a: 'Alfa',
        b: 'Bravo',
        c: 'Charlie',
        d: 'Delta',
        e: 'Echo',
        f: 'Foxtrot',
        g: 'Golf',
        h: 'Hotel',
        i: 'India',
        j: 'Juliett',
        k: 'Kilo',
        l: 'Lima',
        m: 'Mike',
        n: 'November',
        o: 'Oscar',
        p: 'Papa',
        q: 'Quebec',
        r: 'Romeo',
        s: 'Sierra',
        t: 'Tango',
        u: 'Uniform',
        v: 'Victor',
        w: 'Whiskey',
        x: 'Xray',
        y: 'Yankee',
        z: 'Zulu'
     }
     let newString = []
     let formatWords = words.toLowerCase().split('').filter(x => x !== ' ')
     for(let i = 0; i < formatWords.length; i++){
        formatWords[i] in nato ? newString.push(nato[formatWords[i]]) : newString.push(formatWords[i])
     }
     return newString.join(' ')
}



//Top Solution:
function to_nato(words) {
    return words.split('').filter(c => c !== ' ').map(c => table[c.toUpperCase()] || c).join(' ');
  }

// Test:
console.log(to_nato('If you can read'))
