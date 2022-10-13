// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

//Mine:
function addLength(str) {
  let splitArr = str.split(' ')
  let lengths = splitArr.map(x => x.length)
  let result = []
  for (let i = 0; i < splitArr.length; i++){
    result.push(`${splitArr[i]} ${lengths[i]}`)
  }
  return result
}


//Top Solution:
function addLength(str){
  return str.split(" ").map(s => `${s} ${s.length}`)
}

//Test:
addLength('you will win')