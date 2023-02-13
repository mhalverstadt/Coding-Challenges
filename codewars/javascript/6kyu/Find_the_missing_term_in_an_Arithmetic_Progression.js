// An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP. Find the missing term.

// You have to write a function that receives a list, list size will always be at least 3 numbers. The missing term will never be the first or last one.

// Example
// findMissing([1, 3, 5, 9, 11]) == 7
// PS: This is a sample question of the facebook engineer challenge on interviewstreet. I found it quite fun to solve on paper using math, derive the algo that way. Have fun!

//mine:
function findMissing(list){
    let diff = list[1] - list[0]
    let diff2 = list[2] - list[1]
    let difference = diff === diff2 ? diff : diff < 1 ? Math.max(diff, diff2) : Math.min(diff, diff2)
    console.log(difference)
    console.log(diff, diff2)
    for(let i = 0; i < list.length; i++){
        if(list[i + 1] - list[i] !== difference){
            return list[i] + difference
        }
    }  
}

//Other:
var findMissing = function (list) {  
    var expected_sum = (list[0] + list[list.length - 1]) * (list.length + 1) / 2;
    var sum = list.reduce(function(acc, x) { return acc + x; });
    return expected_sum - sum;
  }


// test:
// console.log(findMissing([1, 3, 5, 9, 11]))
console.log(findMissing([1, 3, 4]))
console.log(findMissing([-2, -4, -5]))
console.log(findMissing([ 2, -14, -22 ]))