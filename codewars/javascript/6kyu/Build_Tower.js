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
    let space = ' '
    let floor = '*'
    for(let i = 0; i < nFloors; i++){
        let length = (1+(nFloors-1)*2)
        if (result.length < 1) {
        result.push(`${floor.repeat(length)}`)
        }else{
          result.push(Array.from(`${space.repeat(i)}${floor.repeat(length - i)}`).fill(' ',-i).join(''))
        }
    }
    return result.reverse()
  }

// //Top Solution:
function towerBuilder(n) {
  return Array.from({length: n}, function(v, k) {
    const spaces = ' '.repeat(n - k - 1);
    return spaces + '*'.repeat(k + k + 1) + spaces;
  });
}

// //Test:
console.log (towerBuilder(4))
console.log (towerBuilder(3))
console.log (towerBuilder(2))
console.log (towerBuilder(1))
