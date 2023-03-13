// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.


//mine:
function reverse(str){
  if (str.trim() === ''){
    return ''
  }
  let arr = str.split(' ')
  return arr.map((word, idx) => {
    word.trim()
    if(idx % 2 !== 0){
      return word.split('').reverse().join('').trim()
    }
    return word
  }).join(' ')
}

//top solution:
function reverse(str){
  
    let arr = str.split(" "); 
  
    for(var i = 1; i<arr.length; i+=2){
        arr[i] = arr[i].split('').reverse().join(""); 
    }
    
    return arr.join(" ").trim(); 
    
  }


//test:
console.log(reverse('Reverse this string, please!'))
console.log(reverse('   '))