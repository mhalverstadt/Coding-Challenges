// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

// Example:

// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the starting array, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be []).

/////////////////////////////
//input: two arrays, arrays will have integers, maybe empty. 

//return: the missing integer or 0


//Mine:
function findDeletedNumber(arr, mixArr) {
  //check if lengths are same = 0
  //sort mixed array and compare till we find missing int
  if(arr.length === mixArr.length){
    return 0
  }else{
    let sortMixArr = mixArr.sort((a,b) => a - b)
    for(let i = 0; i < arr.length; i++){
      if(arr[i] !== mixArr[i]){
        return arr[i]
      }
    }
  }
}

//Top Solution:
function findDeletedNumber(arr, mixArr) {
  return arr.filter(v=>mixArr.indexOf(v)==-1)[0]||0
}
//OR:
function findDeletedNumber(arr, mixArr) {
  let arrSum = arr.reduce((a,b) => a + b, 0)
  let mixArrSum = mixArr.reduce((a,b) => a + b, 0)
  return arrSum - mixArrSum
}

//Test:
console.log(findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2)
console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0)