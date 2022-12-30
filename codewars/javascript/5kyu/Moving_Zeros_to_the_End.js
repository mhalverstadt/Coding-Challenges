// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

///////
//intput: an array with all sorts of values and types. any zeros move to end. 
//output: array with all values in same order except zeros moved to end. 


// mine:
function moveZeros(arr){
    let counter = 0
    for(el of arr){
        if(el === 0){
            counter++
        }
    }
    let newArr = arr.filter(x => x !== 0)
    while(counter > 0){
        counter--
        newArr.push(0)
    }
    return newArr
}


//top solution: concate two filtered arrays one with no zeros one with only zeros
var moveZeros = function (arr) {
    return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
  }


//test:
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))