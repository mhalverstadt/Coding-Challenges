//Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
// None of the arrays will be empty, so you don't have to worry about that!

//Mine:
function removeEveryOther(arr){
  for (i = 0; i <= arr.length; i++)
    if (i % 2 !== 0){
      delete arr[i]
    }
  let newArr = arr.filter(x => x !== undefined)
  return newArr
}


//Top Solution:
function removeEveryOther(arr){
  return arr.filter(function(elem, index) {
    return index % 2 === 0;
  });
}



removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])
removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

