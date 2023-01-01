// The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.

// For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.
// Given an integer num, return its complement.

// Example 1:
// Input: num = 5
// Output: 2
// Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.

// Example 2:
// Input: num = 1
// Output: 0
// Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.
 
// Constraints:

// 1 <= num < 231

function findComplement(num){
    let binary = num.toString(2).split('')
    let flippedBinary = binary.map(n => n === '1' ? 0 : 1).join('')
    return parseInt(flippedBinary, 2)
}

//a top solution:
var findComplement = function(num) {
    var binary = num.toString(2);
    var complementBinary = '';
    for (var i = 0; i < binary.length; i++) {
        if (binary[i] === '0') {
            complementBinary += '1';
        } else if (binary[i] === '1') {
            complementBinary += '0';
        }
    }
    return parseInt(complementBinary, 2);
};

// test:
console.log(findComplement(5))