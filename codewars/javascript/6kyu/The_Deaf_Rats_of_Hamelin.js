// The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.

// But some of the rats are deaf and are going the wrong way!

// Kata Task
// How many deaf rats are there?

// Legend
// P = The Pied Piper
// O~ = Rat going left
// ~O = Rat going right
// Example
// ex1 ~O~O~O~O P has 0 deaf rats

// ex2 P O~ O~ ~O O~ has 1 deaf rat

// ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats


var countDeafRats = function(town) {
  let trimmedString = town.split('').filter(letter => letter !== ' ').join('')
  let piperPosition = trimmedString.indexOf('P')
  let deafCount = 0
  for(let i = 0; i < trimmedString.length; i++){
    if(trimmedString[i] === 'P' && i === 0){
      i++
    }
    if(i < piperPosition){
      if(trimmedString[i] === 'O'){
        deafCount++
        i++
      }else if(trimmedString[i] === 'P'){
        i--
      }else{
        i++
      }

    }
    if(i > piperPosition){
      if(trimmedString[i] === '~'){
        deafCount++
        i++
      }else if(trimmedString[i] === 'P'){
        i--
      }else{
        i++
      }
    }
  }
  return deafCount
}

//top solution:
var countDeafRats = function(town) {
  let deafs = 0
  let ident = 'O'
  for ( let i = 0; i < town.length; i++){
     if ( town[i] === 'P' ){
      ident =  '~'
     }
     if (town[i] === ident){
       deafs++
     }
     if (town[i] === '~' || town[i] === 'O'){
      i++
     }
   }
  return deafs;
}


//test:
console.log(countDeafRats('~O~O~O~OP0~~O~O'))
console.log(countDeafRats('P O~ O~ ~O O~'))
console.log(countDeafRats('PO~O~~OO~'))