// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']



//mine:
function solution(str){
    let result = []
    for(let  i = 0; i < str.length; i += 2){
        if(typeof str[i + 1] == 'undefined'){
            result.push(`${str[i]}_`)
        }else{
        result.push(`${str[i]}${str[i+1]}`)
        }
    }
   return result 
}

//solution:
function solution(str){
    var i = 0;
    var result = new Array();
    if (str.length % 2 !== 0) {
      str = str + '_';
    }
    while (i < str.length) {
        result.push(str[i] + str[i+1]);
        i += 2;
      }
    return result;
  }

//one with regex:
function solution(s){
    return (s+"_").match(/.{2}/g)||[]
 }

//test: 
console.log(solution('abcdefg'))