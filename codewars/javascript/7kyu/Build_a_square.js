// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

// Example
// n = 3, so I expect a 3x3 square back just like below as a string:

// +++
// +++
// +++


//mine:

function generateShape(integer){
  let count = 0
  let result =''
  while(count < integer){
    if(integer -1 === count){
    result += `${'+'.repeat(integer)}`
    }else{
      result += `${'+'.repeat(integer)}\n`
    }
    count++
  }
  return result
}

//top:
function generateShape(n){
  return ("+".repeat(n)+"\n").repeat(n).trim()
}

console.log(generateShape(3))