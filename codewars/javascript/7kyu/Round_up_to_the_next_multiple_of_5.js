// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.

//mine:
function rountToNext5(n){
    if(n % 5 === 0 ){
        return n
    }else if(n < 0){
        return n - (n%5)
    }else{
        return n - (n%5) + 5
    }
}

//top solution:
function roundToNext5(n){
    return Math.ceil(n/5)*5;
  }

//OR:
function roundToNext5(n){
    while(n % 5 !== 0) n++;
    return n;
  }


//test:
console.log(rountToNext5(17))
console.log(rountToNext5(-17))