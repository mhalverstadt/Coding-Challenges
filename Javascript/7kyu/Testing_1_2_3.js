// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.


//Mine:
var number=function(array){
    let result = []
    for(let i = 0; i < array.length; i++){
        result.push(`${i+1}: ${array[i]}`)
    }
    return result
}
  
  
//Top Solution:
var number = function(array) {
    return array.map(function (line, index) {
      return (index + 1) + ": " + line;
    });
  }

//Test:
console.log(number(["a", "b", "c"]))
console.log(number([]))
