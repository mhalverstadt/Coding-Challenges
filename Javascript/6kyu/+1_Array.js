// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// Examples
// For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

// [4, 3, 2, 5] would return [4, 3, 2, 6]


//Mine:(doesn't support BigIn!@!#!$%#!%)
// function upArray(arr){
//     let toNumber = BigInt(arr.join('')) + BigInt(1)
//     if(toNumber === 1){
//         return null
//     }
//     let addedOne = String(toNumber)
//     return (arr.some(num => num < 0) || arr.some(n => n > 9))  ? null : Array.from(addedOne).map(x=>Number(x)) 
// }

function upArray(arr){
    if(arr.some(num => num < 0) || arr.some(n => n > 9) || arr[0] == 0 || arr.length == 0){
        return null
    }else{
        arrStrings = arr.map(num=>String(num))
        for(let i = arrStrings.length + 1; i >= 0; i--){
            if(arrStrings[i] < 9){
                arrStrings[i] = Number(arrStrings[i]) +1
                break;
            }else if (arrStrings[i] == 9){
                arrStrings[i] = 0
                if(arrStrings[0] === 0){
                    arrStrings.unshift(1)
                }
            }
        }
    }
    return arrStrings.map(x=>Number(x))
}

//Top Solution:
function upArray(arr) {


    if ((typeof arr === 'undefined') || (arr === null) || (arr.length === 0)) {
        return null;
    }

    for (var i = 0; i < arr.length; i++) {
        if ((arr[i] < 0) || (typeof arr[i] !== 'number') || (arr[i] > 9)) {
            return null;
        }
    }
    // if its 9 and more than one digit we have to check all previous digits
    // whether they are also a 9
    for (var j = arr.length - 1; j > -1; j--) {

        if (arr[j] !== 9) {
            arr[j] = arr[j] + 1;
            break;
        } else {
            arr[j] = 0;
        }

        if (j === 0) {
            arr.unshift(1);
        }
    }

    return arr;
}

// Test:
console.log(upArray([2,3,9]))
console.log(upArray([9]))
console.log(upArray([9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 8]))
