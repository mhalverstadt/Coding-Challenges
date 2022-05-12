// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:
// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.


// Mine: 
function howMuchILoveYou(nbPetals) {
  if ((nbPetals - 1) % 6 === 0 || nbPetals === 1){
    return 'I love you'
  }else if ((nbPetals - 2) % 6 === 0 || nbPetals === 2){
    return 'a little'
  }else if ((nbPetals - 3) % 6 === 0 || nbPetals === 3){
    return 'a lot'
  }else if ((nbPetals - 4) % 6 === 0 || nbPetals === 4){
    return 'passionately'
  }else if ((nbPetals - 5) % 6 === 0 || nbPetals === 5){
    return 'madly'
  }else if ((nbPetals - 6) % 6 === 0 || nbPetals === 6){
    return 'not at all'
  }
}


//Top Solution:
const phrases = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all',
]

function howMuchILoveYou(n) {
     return phrases[(n - 1) % phrases.length] 
}

//OR
function howMuchILoveYou(nbPetals) {
  let phrase = {    
    0: "not at all",
    1: "I love you",
    2: "a little",
    3: "a lot",
    4: "passionately",
    5: "madly"
  }
  return phrase[nbPetals%6]
}

  
//Test: 
howMuchILoveYou(7)
howMuchILoveYou(1)
howMuchILoveYou(286)