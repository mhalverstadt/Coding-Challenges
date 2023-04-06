// You've just recently been hired to calculate scores for a Dart Board game!

// Scoring specifications:

// 0 points - radius above 10
// 5 points - radius between 5 and 10 inclusive
// 10 points - radius less than 5
// If all radii are less than 5, award 100 BONUS POINTS!

// Write a function that accepts an array of radii (can be integers and/or floats), and returns a total score using the above specification.

// An empty array should return 0.

// Examples:
// scoreThrows( [1, 5, 11] )    =>  15
// scoreThrows( [15, 20, 30] )  =>  0
// scoreThrows( [1, 2, 3, 4] )  =>  140



function scoreThrows(radii){
  let score = 0
  if(radii.every(score => score < 5)) score += 100;
  if(radii.every(score => score > 10)) return 0;
  for(dart of radii){
    score += scoring(dart)
  }
  return score
}

function scoring(radius){
  if(radius > 10) return 0
  else if(radius < 5) return 10
  else{return 5}
}


//top solution:
function scoreThrows(radiuses){

  if (radiuses.length <= 0) { return 0 }
  
  var score = 0
  var award = true
  for(var i = 0; i < radiuses.length; i++) {
    if      (radiuses[i] < 5)   { score += 10 }
    else if (radiuses[i] <= 10) { score += 5; award = false }
    else                        { award = false }
  }
  
  if (award) { score += 100 }
  
  return score;
}

//test:
console.log(scoreThrows([15, 20, 30]))
console.log(scoreThrows([1, 2, 3, 4]))
console.log(scoreThrows([]))