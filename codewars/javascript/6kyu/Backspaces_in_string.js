// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

/////////////////////
//input: string, with letters and the only other special character is '#'
//output: string with the '#' acting like a backspace


//loop through the string
//push char to an arr
//if char is '#' pop off array
//return joined arr

//Mine:
function cleanString(s) {
    let result = []
    for(let i = 0; i < s.length; i++){
      if(s[i] !== '#'){
        result.push(s[i])
      }else{
        result.pop()
      }
    }
    return result.join('')
  }
  
  //Top Solution:
  function clean_string(s) {
    const result = []
      for (const c of s) {
      if (c === "#") {
        result.pop()
      } else {
        result.push(c)
      }
    }
    return result.join("")
  }
  
  
  
  
  //Test:
  console.log(cleanString('ab#cd#d##'), 'a')
  console.log(cleanString('abcdef#'), 'abcde')
  console.log(cleanString('###'), '')