// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

// If

// sz is <= 0 or if str is empty return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
// Examples:
// revrot("123456987654", 6) --> "234561876549"
// revrot("123456987653", 6) --> "234561356789"
// revrot("66443875", 4) --> "44668753"
// revrot("66443875", 8) --> "64438756"
// revrot("664438769", 8) --> "67834466"
// revrot("123456779", 8) --> "23456771"
// revrot("", 8) --> ""
// revrot("123456779", 0) --> "" 
// revrot("563000655734469485", 4) --> "0365065073456944"


//mine:
function revrot(str, sz) {
    if(sz <= 0 || str.length < 1 || sz > str.length){
        return ''
    }
    let chunks = []
    for(let i = 0; i < str.length; i += sz){
        chunks.push(str.slice(i, i + sz))
    }
    // console.log("222".split('').reduce((a,b) => a + b**3, 0))
    return chunks.filter(n => n.length === sz).map(num => {
        if(num.split('').reduce((a,b) => a + b**3, 0) % 2 === 0){
            return num.split('').reverse().join('')
        }else{
            return num.slice(1) + num[0]
        }
    }).join('')
}

//top:
function revrot(str, sz) {
    if (sz <= 0 || !str || sz > str.length) return '';    
      
    const sumCubes = chunk => chunk.split('').reduce((sum, digit) => sum += digit**3, 0);
    const reverse = chunk => chunk.split('').reverse().join('');
    const rotate = chunk => chunk.slice(1) + chunk.slice(0, 1);
    
    const chunks = [];
    
    for (let i = 0; i < str.length; i += sz) {
      let chunk = str.slice(i, i + sz);
      
      if (chunk.length < sz) continue;
      
      chunk = sumCubes(chunk) % 2 
        ? rotate(chunk)   
        : reverse(chunk);
      
      chunks.push(chunk)
    }
    
    return chunks.join('')
}

//test:
console.log(revrot("123456987654", 6))
console.log(revrot("123456779", 8))
console.log(revrot("", 8))
console.log(revrot("123456779", 0))