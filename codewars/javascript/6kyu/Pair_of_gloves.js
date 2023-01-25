// Pair of gloves
// Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

// Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

// Examples:
// input = ["red", "green", "red", "blue", "blue"]
// result = 2 (1 red pair + 1 blue pair)

// input = ["red", "red", "red", "red", "red", "red"]
// result = 3 (3 red pairs)


//mine:

function numberOfPairs(gloves){
    let gloveMap = {}
    let result = 0
    for(glove of gloves){
        gloveMap[glove] ? gloveMap[glove]++ : gloveMap[glove] = 1
    }
    for(pairs in gloveMap){
        result += Math.floor(gloveMap[pairs] / 2)
    }
    return result
}

//top solution:
function numberOfPairs(gloves) {
    let pairs = 0;
    let count = {}
    for (let color of gloves) {
      if (color in count) {
        count[color]++;
      } else {
        count[color] = 1;
      }
      if (count[color] === 2) {
        pairs++;
        count[color] = 0;
      }
    }
    return pairs;
  }

//test:
console.log(numberOfPairs(['black','purple','purple','gray','black']))