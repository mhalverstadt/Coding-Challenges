// You are given three integer inputs: length, minimum, and maximum.

// Return a string that:

// Starts at minimum
// Ascends one at a time until reaching the maximum, then
// Descends one at a time until reaching the minimum
// repeat until the string is the appropriate length
// Examples:

//  length: 5, minimum: 1, maximum: 3   ==>  "12321"
//  length: 14, minimum: 0, maximum: 2  ==>  "01210121012101"
//  length: 11, minimum: 5, maximum: 9  ==>  "56789876567"
// Notes:

// length will always be non-negative
// negative numbers can appear for minimum and maximum values
// hyphens/dashes ("-") for negative numbers do count towards the length
// the resulting string must be truncated to the exact length provided
// return an empty string if maximum < minimum or length == 0
// minimum and maximum can equal one another and result in a single number repeated for the length of the string

Mine:
function ascendDescend(length, minimum, maximum){
    //initilize an empty array to push to 
    //create a loop starting from the min and increment up to the max then down   
    //pushing to the array
    let result = ''
    if(minimum === maximum){
      return result.padEnd(length, minimum)
    }
    if(length === 1){
      minimum < 0 ? result += '-' : result+= String(minimum)
      return result
    }
    if (length === 0 || minimum > maximum){
      return ''
    }
    let i = minimum
    result+=i
    while(result.length < length){
      while(i < maximum){
        i++
        for(let k = 0; k < String(i).length; k++){
          let posArr = String(i).split('')
          if(result.length < length){
            result += posArr[k]
          }
        }
      }
      while(i > minimum){
        i--
        console.log(i)
          for(let j = 0; i < String(i).length; j++){
          let negArr = String(i).split('')
          if(result.length < length){
            result += negArr[j]
          }
        }
      }
    }
    return result
  }

// //Top Solution:
function ascendDescend(length, minimum, maximum) {
    let increase = '', descending = '', answer = '';
    for (let i = minimum; i <= maximum; i++) {
        increase += i;
    }
    for (let j = maximum - 1; j > minimum; j--) {
        descending += j;
    }
    for (let k = 0; k < length; k++) {
        answer += increase;
        answer += descending;
    }
    return answer.slice(0, length);
  }

// //Test:
