// I love Fibonacci numbers in general, but I must admit I love some more than others.

// I would like for you to write me a function that, when given a number n (n >= 1 ), returns the nth number in the Fibonacci Sequence.

// For example:

//    nthFibo(4) == 2
// Because 2 is the 4th number in the Fibonacci Sequence.

// For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.


//mine:

function nthFibo(n) {
    let fib = [0, 1]
    while(fib.length < n){
        fib.push(fib[fib.length -1] + fib[fib.length - 2])
    }
    console.log(fib)
    return fib[n - 1]
}

//top solution:
// function nthFibo(n) {
//     let [prev, curr] = [0, 1];
//     for (let i = 1; i < n; i++) [prev, curr] = [curr, prev + curr];
//     return prev;
// }


// test:
console.log(nthFibo(1))
console.log(nthFibo(5))
  
