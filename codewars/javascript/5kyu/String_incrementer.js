// DESCRIPTION:
// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

//Mine:
function incrementString (strng) {
    newArr = strng.split('')
    if(isNaN(+(newArr[newArr.length -1]))){
        newArr.push('1')
    }else if(isNaN(newArr[0]) === false){
        return String(parseInt(strng)+1).padStart(strng.length,'0')
    }else{
        filteredArr = newArr.map(n=> +n).filter(x=> x > -1)
        padNum = filteredArr.length
        newNum = String(Number(filteredArr.join(''))+1)
        return `${strng.match(/[A-z]/g).join('')}${newNum.padStart(padNum,'0')}`
    }
    return newArr.join('')
  }

// Top Solution:
function incrementString(input) {
    if(isNaN(parseInt(input[input.length - 1]))) return input + '1';
    return input.replace(/(0*)([0-9]+$)/, function(match, p1, p2) {
      var up = parseInt(p2) + 1;
      return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
    });
  }

// //Test:
console.log(incrementString("foobar999"))
console.log(incrementString("foo"))
console.log(incrementString("foobar001"))
console.log(incrementString("009"))