

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]


//Mine:
function arrayDiff(a, b) {
  return a.filter(elem => !b.includes(elem))
}

function arrayDiff(a,b) {
  let result = []
  for(let i = 0; i < a.length; i++){
    if(!b.includes(a[i])){
      result.push(a[i])
    }
  }
  return result 
}


// Top Solution: SAME
function array_diff(a, b) {
  return a.filter(e => !b.includes(e));
}



//Test:
console.log(arrayDiff([1,2,3], [1,2]))
