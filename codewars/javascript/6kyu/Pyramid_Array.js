// Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

// pyramid(0) => [ ]
// pyramid(1) => [ [1] ]
// pyramid(2) => [ [1], [1, 1] ]
// pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
// Note: the subarrays should be filled with 1s


//mine:

function pyramid(n) {
  let result = []
  for(let i = 1; i <= n; i++){
    result.push([...Array(i).fill(1)])
  }
  return result
}

//top solution:
function pyramid(n) {
  const res = [];
  for(let i = 0; i < n; i++){
    res.push([...Array(i+1)].fill(1))
  }
  return res;
}

//test:
console.log(pyramid(3))
console.log(pyramid())
console.log(pyramid(1))