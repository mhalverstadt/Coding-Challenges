// This kata is from check py.checkio.org

// You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

// Let's look at a few examples:

// array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
// array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

// Mine: 
  //parameters - All positives 
  //returns - one number that is the index of n to the power of n
  //pseudo code - 
    //find the number at index n
    //raise that number to the nth degree
function index(array, n){
  return n >= array.length ? -1 : array[n]**n
}

//Top Solution:
const index = (array, n) => array.length > n ? Math.pow(array[n], n) : -1;


  
//Test: 
index([1, 2, 3, 4],2)
index([75,68,35,61,9,36,89,0,30], 10)