// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

////////
//input: array and a target -> will ever be empty? always whole numbers?
//output: array - format? duplicates?

function twoSum (array, target){
    let hashMap = {}
    let result = []
    for(const num of array){
        hashMap[num] = num
    }
    for(const num of array){
        if((target - num) in hashMap){
            result.push([num, hashMap[target - num]])
        }
    }
    return result 
}

function twoSum(array, target){
    let hashMap = {}
    let result = []
    for(const num of array){
        let num2 = target - num
        if(num2 in hashMap){
            result.push([num, num2])
        }
        hashMap[num] = true
    }
    return result
}


//from https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038
// const twoSum = (array, sum) => {
//     const pairs = [];
//     const store = [];
  
//     for (let part1 of array) {
//       const part2 = sum - part1;
//       if (store.indexOf(part2) !== -1) pairs.push([part1, part2]);
//       store.push(part1);
//     }
  
//     return pairs;
//   };



// test: 
console.log(twoSum([1,2,2,2,2,3,4], 4))
console.log(twoSum([1,2,2,3,4,5], 6))