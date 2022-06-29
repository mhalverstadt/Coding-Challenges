// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );


//Mine:
var capitals = function (word) {
  result = []
  for(let i = 0; i < word.length; i++){
    if(word[i] === word[i].toUpperCase()){
      result.push(i)
    }
  }
  return result
};

//Top Solution:
var capitals = function (word) {
  var caps = [];
  for(var i = 0; i < word.length; i++) {
    if(word[i].toUpperCase() == word[i]) caps.push(i);
  }
  return caps;
};

//Test:
capitals('CodEWaRs')