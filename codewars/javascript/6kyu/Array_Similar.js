// Write a function that determines whether the passed in sequences are similar. Similar means they contain the same elements, and the same number of occurrences of elements.

// var arr1 = [1, 2, 2, 3, 4],
//     arr2 = [2, 1, 2, 4, 3],
//     arr3 = [1, 2, 3, 4],
//     arr4 = [1, 2, 3, "4"]
// arraysSimilar(arr1, arr2); // Should equal true
// arraysSimilar(arr2, arr3); // Should equal false
// arraysSimilar(arr3, arr4); // Should equal false


function arraysSimilar(arr1, arr2) {
    if(arr1.length !== arr2.length) return false
    let sortArr1 = arr1.sort((a,b) => a-b)
    let sortArr2 = arr2.sort((a,b) => a-b)
    for(let i = 0; i < arr1.length; i++){
        if(sortArr1[i] !== sortArr2[i]){
            return false
        }
    }
    return true
}


//top solution:
function arraysSimilar(arr1, arr2) {
    arr1 = arr1.sort(sortFunc);
    arr2 = arr2.sort(sortFunc);
    return arr1.length == arr2.length && arr1.every(function(a,i) {return a === arr2[i];});
  }
  
  function sortFunc(a,b) {return a-b;}

//test:
console.log(arraysSimilar([2, 1, 3, 4], [1, 2, 3, 4]))