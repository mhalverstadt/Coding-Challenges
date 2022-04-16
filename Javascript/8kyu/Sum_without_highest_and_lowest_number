//Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
// Mind the input validation.

//Mine:
function sumArray(array) {
  if (array === undefined || array === null || array.length === 0 || array.length === 1 || array.length === 2){
    return 0
  }else{
    array.sort((a,b) => a - b).pop()
    array.shift()
    return array.reduce((x,y)=> x + y)
  }
}

//Top Answer:
sumArray([null])
sumArray([])
sumArray([ 3 ])
sumArray([ 3, 5 ]) 
sumArray([ 6, 2, 1, 8, 10 ])