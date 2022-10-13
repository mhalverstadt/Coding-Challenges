// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"


//Mine:
let nameShuffler = str => str.split(' ').reverse().join(' ')

//Top Solution:
function nameSuffle(str){
  return str.split(' ').reverse().join(' ')
}


//Test:
nameShuffler('john McClane')
