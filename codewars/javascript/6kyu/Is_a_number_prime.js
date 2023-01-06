// Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Requirements
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
// NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.
// Example
// is_prime(1)  /* false */
// is_prime(2)  /* true  */
// is_prime(-1) /* false */



//mine:
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// The Math.sqrt() function returns the square root of a number. In this case, we use it to calculate the square root of n.

// The reason we do this is to improve the performance of the function. Since a prime number is a positive integer greater than 1 that has no positive divisors other than 1 and itself, we only need to check for divisors up to the square root of n. This is because, if n has a divisor d that is greater than its square root, then it must also have a divisor n / d that is less than its square root. For example, if n is a multiple of 9 (which has a divisor of 3 that is greater than its square root), then it must also be a multiple of 3 (which is less than its square root).

// By only checking for divisors up to the square root of n, we can significantly reduce the number of iterations in the loop, which improves the performance of the function.