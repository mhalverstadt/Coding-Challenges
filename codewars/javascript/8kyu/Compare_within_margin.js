// Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. The function should return whether a is lower than, close to, or higher than b.

// a is considered "close to" b if margin is greater than or equal to the distance between a and b.

// Please note the following:

// When a is close to b, return 0.
// Otherwise...

// When a is less than b, return -1.

// When a is greater than b, return 1.

// If margin is not given, treat it as zero.

// Assume: margin >= 0

// Tip: Some languages have a way to make parameters optional.

//Mine:
function closeCompare(a, b, margin = 0){
  if(a+margin > b && Math.abs(a-b) > margin){
    return 1
  }else if(a+margin < b){
    return -1
  }else{
    return 0
  }
}

//Top Solution:
function closeCompare(a, b, m = 0){
  return Math.abs(a - b) <= m? 0: Math.sign(a - b);
}

//Test: 
console.log(closeCompare(4, 5))
console.log(closeCompare(1.99, 5, 3))
console.log(closeCompare(3, 5, 3))

  