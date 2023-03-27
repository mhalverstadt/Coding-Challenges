// Backwards Read Primes are primes that when read backwards in base 10 (from right to left) are a different prime. (This rules out primes which are palindromes.)

// Examples:
// 13 17 31 37 71 73 are Backwards Read Primes
// 13 is such because it's prime and read from right to left writes 31 which is prime too. Same for the others.

// Task
// Find all Backwards Read Primes between two positive given numbers (both inclusive), the second one always being greater than or equal to the first one. The resulting array or the resulting string will be ordered following the natural order of the prime numbers.

// Examples (in general form):
// backwardsPrime(2, 100) => [13, 17, 31, 37, 71, 73, 79, 97] backwardsPrime(9900, 10000) => [9923, 9931, 9941, 9967] backwardsPrime(501, 599) => []

// See "Sample Tests" for your language.

function backwardsPrime(start, stop){
  let arr = []
  let result = []
  const isPrime = n => {
    for(let i = 2, s = Math.sqrt(n); i <= s; i++) {
        if(n % i === 0) return false;
    }
    return num > 1;
  }
  for(let i = start; i <= stop; i++){
    arr.push(i)
  }
  for(num of arr){
    let reverseNum = +(String(num).split('').reverse().join(''))
    if(isPrime(num) && isPrime(reverseNum) && num > 11 && !result.includes(reverseNum) && num !== reverseNum){
      result.push(num)
      if(num !== reverseNum && !result.includes(reverseNum) && reverseNum > start && reverseNum < stop){
        result.push(reverseNum)
      }
    }
  }
  return result.sort((a,b) => a-b)
}


//top solution:
const isPrime = num => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
  }
  return true;
};

const isReversePrime = num => {
  let reverseNum = +num.toString().split('').reverse().join('');
  if (num !== reverseNum) return isPrime(reverseNum);
  else return false;
}

const backwardsPrime = (start, stop) => {
  let result = [];
  for (let num = start; num <= stop; num++) {
      if (num % 2 !== 0) {
          if (isPrime(num) && isReversePrime(num)) result.push(num);
      }
  }
  return result;
}
//test:
// console.log(backwardsPrime(2, 100))
console.log(backwardsPrime(9900, 10000))