// The Fibonacci numbers are the numbers in the following integer sequence (Fn):

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

// such as
// F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

// Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying
// F(n) * F(n+1) = prod.

// Your function productFib takes an integer (prod) and returns an array:
// [F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
// depending on the language if F(n) * F(n+1) = prod.

// If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return
// [F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
// F(n) being the smallest one such as F(n) * F(n+1) > prod.

// Some Examples of Return:
// productFib(714) # should return (21, 34, true), 
//                 # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

// productFib(800) # should return (34, 55, false), 
//                 # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
// -----
// productFib(714) # should return [21, 34, true], 
// productFib(800) # should return [34, 55, false], 

/////////////////////////////////////////////////////////////

//map fib numbers
//find two consecutive whos product is < prod
//check if the two consecutive = prod
//find two consecutive whos product is > prod


//mine:
function productFib(prod){
  //fib(n) : fib number
  let fibMap = {
    0:0,
    1:1,
  }
  //product of fib(n) * fib(n-1)
  let productMap = {
    1:0,
  }
  //loop mapping fib(n) and product of fib(n) * fib(n-1)
  for(let i = 2; prod > Object.values(productMap)[Object.values(productMap).length -1]; i++){
  
    fibMap[i] = fibMap[i - 1] + fibMap[i - 2]
    productMap[i] = fibMap[i] * fibMap[i - 1]
  }

  let lastProdValue = Object.values(productMap)[Object.values(productMap).length -1]
  let lastFibValue = Object.values(fibMap)[Object.values(fibMap).length -1]
  let secondLastFibValue = Object.values(fibMap)[Object.values(fibMap).length -2]

  if(prod === lastProdValue){
    return [secondLastFibValue, lastFibValue, true]
  }

  return [secondLastFibValue, lastFibValue, false]
}

//top solution:
function productFib(prod){
  var n = 0;
  var nPlus = 1;  
  while(n*nPlus < prod) {
    nPlus = n + nPlus;
    n = nPlus - n;
  }
  return [n, nPlus, n*nPlus===prod];
}

//or:
function productFib(prod){
  let [a, b] = [0, 1];
  while(a * b < prod) [a, b] = [b, a + b];
  return [a, b, a * b === prod];
}

//test:
console.log(productFib(714))
console.log(productFib(800))
console.log(productFib(4895))
console.log(productFib(193864606))