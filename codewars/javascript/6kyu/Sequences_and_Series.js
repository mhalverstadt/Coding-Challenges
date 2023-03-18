// Have a look at the following numbers.

//  n | score
// ---+-------
//  1 |  50
//  2 |  150
//  3 |  300
//  4 |  500
//  5 |  750

//50,100,150,200,250

// Can you find a pattern in it? If so, then write a function getScore(n)/get_score(n)/GetScore(n) which returns the score for any positive number n.

// Note Real test cases consists of 100 random cases where 1 <= n <= 10000


//mine:
function getScore(n) {
    let counter = 1
    let sum = 0
    let addition = 0
    while(counter <= n){
        addition += 50
        sum += addition
        counter++
    }
    return sum
}

//top solution:
function getScore(n) {
    return n * (n + 1) * 25;
  }

//or:
function getScore(n) {
let res = 0, step = 50;

while (n--) {
    res += step;
    step += 50;
}

return res;
}

// test:
console.log(getScore(2))