// Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

// Example:
// For input: [3, 4, 4, 3, 6, 3]

// remove the 3 at index 0
// remove the 4 at index 1
// remove the 3 at index 3
// Expected output: [4, 6, 3]

// More examples can be found in the test cases.

// Good luck!

// Mine:
function solve(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++){
        if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])){
            result.push(arr[i])
        }else if(i === arr.lastIndexOf(arr[i])){
            result.push(arr[i])
        }
    }
    return result
}

//Top Solution:
function solve(arr){
    return arr.filter((val,i) => arr.lastIndexOf(val) == i);
}


//Test:
console.log(solve([3, 4, 4, 3, 6, 3]))