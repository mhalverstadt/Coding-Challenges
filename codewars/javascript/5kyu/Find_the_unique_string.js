// There is an array of strings. All strings contains similar letters except one. Try to find it!

// findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
// findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
// Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

// It’s guaranteed that array contains more than 2 strings.

//mine:
function findUniq(arr){
    let lowerCaseAndTrimmed = arr.map(str => Array.from(new Set(str.toLowerCase().trim())).sort().join(''))
    for(let i = 0; i < arr.length; i++){
        if(lowerCaseAndTrimmed.indexOf(lowerCaseAndTrimmed[i]) === lowerCaseAndTrimmed.lastIndexOf(lowerCaseAndTrimmed[i])){
            return arr[i]
        }
    }
}


// top solution:
function findUniq(arr) {
    let [a,b,c] = arr.slice(0,3)
    
    if (!similar(a,b) && !similar(a,c)) return a
    for (d of arr) if (!similar(a,d)) return d
  }
  
  function similar (x, y) {
    x = new Set(x.toLowerCase())
    y = new Set(y.toLowerCase())
  
    if (x.size !== y.size) return false
    for (z of x) if (!y.has(z)) return false
  
    return true
  }


//test:
console.log(findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]))
console.log(findUniq([ 'BbBb', 'b', 'aa']))
console.log(findUniq([ 'silvia', 'vasili', 'victor' ]))
console.log(findUniq(['  ', 'a', '  ']))