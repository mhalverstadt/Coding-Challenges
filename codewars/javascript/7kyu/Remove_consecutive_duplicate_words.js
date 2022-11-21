// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
// --> "alpha beta gamma delta alpha beta gamma delta"


//intput: string of words, only single spaces, no special characters, no numbers, only letters and spaces. Any empty strings?

//return: a string without duplicated words

//Mine:
const removeConsecutiveDuplicates = s => {
  let arr = s.split(' ')
  let result = []
  for(let i = 0; i < arr.length; i++){
    if(arr[i] !== arr[i +1]){
      result.push(arr[i])
    }
  }
  return result.join(' ')
}

//Top Solution:
const removeConsecutiveDuplicates = s => s.split(" ").filter((x,i,arr) => x!=arr[i-1]).join(" ");

//Test:
console.log(removeConsecutiveDuplicates("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
))