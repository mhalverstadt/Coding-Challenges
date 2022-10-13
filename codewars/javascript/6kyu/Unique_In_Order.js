// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]


//Mine:
var uniqueInOrder=function(iterable){
  let result = []
  for(let i = 0; i < iterable.length; i++){
    if(iterable[i] !== iterable[i+1]){
      result.push(iterable[i])
    }
  }
  return result
}

//Top Solution:
function uniqueInOrder(it) {
  var result = []
  var last
  
  for (var i = 0; i < it.length; i++) {
    if (it[i] !== last) {
      result.push(last = it[i])
    }
  }
  
  return result
}

//OR:
var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}

//Test:
uniqueInOrder('AAAABBBCCDAABBB')
uniqueInOrder([1,2,2,3,3])