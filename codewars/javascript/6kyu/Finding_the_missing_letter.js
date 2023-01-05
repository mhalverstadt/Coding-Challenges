// Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

//////////////////////////////////////////////////////////////


//mine:
function findMissingLetter(array){
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    let firstLetter = array[0].toLowerCase()
    let idx = alpha.indexOf(firstLetter)
    for(let i = idx, j = 0; j < array.length; i++, j++){
      if(alpha[i] !== array[j].toLowerCase()){
        return alpha[i + 1].toLowerCase() === array[j] ? alpha[i] : alpha[i].toUpperCase()
      }
    }
  }
  
  
  //top solution:
  function findMissingLetter(array) {
    let first = array[0].charCodeAt(0)
    console.log(first)
    for (let i = 1; i < array.length; i++) {
      if (first + i !== array[i].charCodeAt(0)) {
        return String.fromCharCode(first + i)
      }
    }
    throw new Error("Invalid input")
  }
  
  
  //test:
  console.log(findMissingLetter(['a','b','c','d','f']), 'e')
  console.log(findMissingLetter(['O','Q','R','S']), 'P')