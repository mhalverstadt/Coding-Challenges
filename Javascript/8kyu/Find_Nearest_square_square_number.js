// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

// Goodluck :)

//Mine:
function nearestSq(n){
    return Math.round(Math.sqrt(n)) ** 2
}

//Top Solution:
const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2);

//Test:
console.log(nearestSq(10))
