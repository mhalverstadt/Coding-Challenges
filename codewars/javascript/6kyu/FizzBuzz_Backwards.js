// Traditionally in FizzBuzz, multiples of 3 are replaced by "Fizz" and multiples of 5 are replaced by "Buzz". But we could also play FizzBuzz with any other integer pair [n, m] whose multiples are replaced with Fizz and Buzz.

// For a sequence of numbers, Fizzes, Buzzes and FizzBuzzes, find the numbers whose multiples are being replaced by Fizz and Buzz. Return them as an array [n, m]

// The Fizz and Buzz numbers will always be integers between 1 and 50, and the sequence will have a maximum length of 100. The Fizz and Buzz numbers might be equal, and might be equal to 1.

// Examples
// Classic FizzBuzz; multiples of 3 are replaced by Fizz, multiples of 5 are replaced by Buzz:
// [1, 2, "Fizz", 4, "Buzz", 6]  ==>  [3, 5] 
// Multiples of 2 are replaced by Fizz, multiples of 3 are replaced by Buzz:
// [1, "Fizz", "Buzz", "Fizz", 5, "FizzBuzz"]  ==>  [2, 3]
// Multiples of 2 are replaced by Fizz and Buzz:
// [1, "FizzBuzz", 3, "FizzBuzz", 5, "FizzBuzz"]  ==>  [2, 2]
// Fizz = 1, Buzz = 6:
// ["Fizz", "Fizz", "Fizz", "Fizz", "Fizz", "FizzBuzz"]  ==>  [1, 6]

//take in an array of numbers and 'fizz', 'buzz' and 'fizzbuzz', no special characters. nums between 1-50 with max length of 100. fizz & buzz might be equal. no floats. no negatives. 

//return an array of two numbers representings 'fizz' and 'buzz' 


//Mine:

function reverseFizzBuzz(array) {
  let fizz, buzz
  for(let i = 0; i < array.length; i++){
    if (array[i] === 'Fizz'){
      fizz = array.indexOf(array[i]) + 1
    }else if (array[i] === 'Buzz'){
      buzz = array.indexOf(array[i]) + 1
    }else if(array[i] === 'FizzBuzz' && fizz === undefined){
      fizz = array.indexOf(array[i]) + 1
    }else if(array[i] === 'FizzBuzz' && buzz == undefined){
      buzz = array.indexOf(array[i]) + 1
    }
  }
  return [fizz, buzz]
};

//Top Solution:
function reverseFizzBuzz(array) {
  var fizz = (array.indexOf("Fizz") + 1) ? array.indexOf("Fizz") + 1 : array.indexOf("FizzBuzz")+1;
  var buzz = (array.indexOf("Buzz") + 1) ? array.indexOf("Buzz") + 1 : array.indexOf("FizzBuzz")+1;
return [fizz,buzz];
};

//Test:
console.log(reverseFizzBuzz([1,2,"Fizz",4,"Buzz"]))
console.log(reverseFizzBuzz([1, "FizzBuzz", 3, "FizzBuzz", 5, "FizzBuzz"]))
console.log(reverseFizzBuzz([1,"Fizz","Buzz","Fizz",5,"FizzBuzz"]))
console.log(reverseFizzBuzz(["Fizz", "Fizz", "Fizz", "Fizz", "Fizz", "FizzBuzz"]))