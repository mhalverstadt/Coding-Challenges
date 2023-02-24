// Your task is to write function factorial.

function factorial (n) {
  let factorialMap = {0 : 1};
  for(let i = 1; i <= n; i++){
    factorialMap[i] = i * factorialMap[i - 1]
  };
  return factorialMap[n];
}

//top solution:
const factorial = n => n ? factorial(n - 1) * n : 1;


// Test Cases:
