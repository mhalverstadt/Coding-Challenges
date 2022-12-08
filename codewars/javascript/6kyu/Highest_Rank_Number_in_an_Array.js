// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

///////////////////////////////////
//map frequecy of numbers
//find max
//check if multiple numbers occure at max
//return largest number at max 


//mine:
function highestRank(arr){
  const charMap = {}
  let maximums = []
  for (num of arr){
    charMap[num] ? charMap[num]++ : charMap[num] = 1
  }
  console.log(charMap)
  let max = Math.max(...Object.values(charMap))
  console.log(max)
  for(n in charMap){
    if(charMap[n] == max){
      maximums.push(n)
    }
  }
  return Math.max(...maximums)
}

//top solution:
//this is not ideal. 
function highestRank(arr){
  return arr.sort((a,b)=>arr.filter(i=>i===b).length - arr.filter(i=>i===a).length)[0];
}



//test:
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]))
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]))
console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]))