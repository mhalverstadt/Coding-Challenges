// If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

// If n is not an integer, return the string "NaN".

// Ex:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'


function dashatize(num) {
  if(typeof num !== 'number' || isNaN(num)){
    return 'NaN';
  }
  let arr = String(num).split('')
  if(arr[0] === '-'){
    arr.shift()
  }
  let dashes = arr.map((n, idx) => {
    if(n % 2 !== 0){
      return `-${n}-`
    }
    return n
  }).join('')
  return dashes.split('').filter((n, idx) => {
    if(idx === 0 && n === '-'){
      return false
    }else if(idx === dashes.length - 1 && n === '-'){
      return false
    }if(n === '-' && dashes[idx + 1] === '-'){
      return false
    }
    return n
  }).join('')
}

//non regex solution:
function dashatize(num) {
  return num = num.toString().split("").map(function(c){
    return c % 2 ? "-" + c + "-" :  c ;
  }).join("").split("-").filter(a => a != "").join("-");
};

//test
console.log(dashatize(28369));
console.log(dashatize(3699));
console.log(dashatize(274));