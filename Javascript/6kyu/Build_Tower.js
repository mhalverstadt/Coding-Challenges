// Build Tower
// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

// //Mine:
function towerBuilder(nFloors) {
    let result =[]
    let floor = '*'
    for(let i = 0; result.length < nFloors; i++){
        result.push(floor)
        floor += '**'
    }
    return result
  }

// //Top Solution:

// //Test:
console.log (towerBuilder(3))
console.log (towerBuilder(2))
console.log (towerBuilder(1))
