// The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).

// Examples
// numberToPower(3,2)  // -> 9 ( = 3 * 3 )
// numberToPower(2,3)  // -> 8 ( = 2 * 2 * 2 )
// numberToPower(10,6) // -> 1000000


//Mine:
function numberToPower(number, power){
  let result = number
  if (power === 0){
    return 1
  }else{
    for(let i = 1; i < power; i++){
      result *= number
    }
  }
  return result
}

//Top Solution:
function numberToPower(number, power){
  var total = 1;
  for (var i = 1; i <= power; i++) { 
    total = total * number;
  }
  return total;
}


// Test:
console.log(numberToPower(2,3))