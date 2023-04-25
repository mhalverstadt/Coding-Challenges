// Sort the given array of strings in alphabetical order, case insensitive. For example:

// ["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
// ["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]


// input: names - unsorted strings
// output: case-agnostic sort



//mine:
// sortme = function( names ){
//   if(names.length === 1) return names
//   if(names.length === 0) return []
//   const sortArr = names.map(str => str.toLowerCase()).sort()
//   return sortArr.map(str => names.includes(str[0].toUpperCase()+str.slice(1)) ? str[0].toUpperCase()+str.slice(1) : str)
// }

function sortme(arr) {
  return arr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
}



//test:
console.log(sortme(["C", "d", "a", "B"]))
console.log(sortme(["Hello", "there", "I'm", "fine"]))