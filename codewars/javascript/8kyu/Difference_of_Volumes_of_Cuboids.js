// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.

//Mine:
function findDifference(a, b) {
  let aReduction = a.reduce((x,y) => x*y)
  let bReduction = b.reduce((acc, cur) => acc * cur)
  return Math.abs(aReduction - bReduction)
}

//Top Solution:
function find_difference(a, b) {
  return Math.abs(a.reduce((previous, current) => previous * current) - b.reduce((previous, current) => previous * current));
}

findDifference([3, 2, 5], [1, 4, 4])
