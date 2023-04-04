// We need the ability to divide an unknown integer into a given number of even parts — or at least as even as they can be. The sum of the parts should be the original value, but each part should be an integer, and they should be as close as possible.

// Example code:

// splitInteger(20, 6)  // returns [3, 3, 3, 3, 4, 4]
// Complete the function so that it returns an array of integer representing the parts. Ignoring the order of the parts, there is only one valid solution for each input to your function!

// (Also, there is no reason to test for edge cases: the input to your function will always be valid for this kata.)

//mine:
function splitInteger(num, parts) {
  // Calculate the size of each part
  const partSize = Math.floor(num / parts);
  const numPartsOfSize = num - (partSize * parts);
  const result = new Array(parts).fill(partSize);

  for (let i = 0; i < numPartsOfSize; i++) {
    result[i]++;
  }

  return result.sort((a,b) => a-b);
}

//top:
function splitInteger(num, parts) {
  const remainder = num % parts;
  const int = Math.floor(num / parts);

  return [
    ...new Array(parts - remainder).fill(int),
    ...new Array(remainder).fill(int + 1)
  ];
}

// //test:
// console.log(splitInteger(20, 5))
// console.log(splitInteger(20, 6))
console.log(splitInteger(11,3))