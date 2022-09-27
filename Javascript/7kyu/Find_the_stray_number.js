// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)


// Mine:
function stray(numbers) {
  let counts = {}
  for (num of numbers){
    counts[num] = counts[num] ? counts[num] += 1 : 1
  }
  return +(Object.keys(counts).find(key=>counts[key] === 1))
}

//Top Solution:
function stray(numbers){
  for (var i in numbers){
     if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
  }
}



//Test:
console.log(stray([1, 1, 2, 2, 15, 2]))
