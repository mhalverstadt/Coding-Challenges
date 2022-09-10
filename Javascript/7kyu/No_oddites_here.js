// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

//Mine:
function noOdds( values ){
  return values.filter(num=>num%2===0)
}

//Top Solution:
function noOdds( values ){
    function isEven(number){
    return number%2 == 0;
    }
    
    return values.filter(isEven);
  }

//Test:
console.log()