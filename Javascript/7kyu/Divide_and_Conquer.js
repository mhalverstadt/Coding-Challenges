// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.

// Return as a number.

//Mine:
function divCon(x){
    let result = 0
    x.map(num => typeof num === 'number' ? result += num : result -= +num)
    return result
}

//Top Solution:
function divCon(x){
    return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
  }


//Test:
console.log(divCon([9, 3, '7', '3']))