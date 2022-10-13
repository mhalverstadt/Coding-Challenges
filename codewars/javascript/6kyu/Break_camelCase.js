// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

//Mine:
function solution(string) {
    let arr = string.split('')
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== arr[i].toLowerCase()){
            arr.splice(i,0,' ')
            i+= 2
        }
    }
    return arr.join('')
}


//Top Solution:
function solution(string) {
    return(string.replace(/([A-Z])/g, ' $1'));
  
  }


//Test: 
console.log(solution('camelCasingTest'))
console.log(solution(''))