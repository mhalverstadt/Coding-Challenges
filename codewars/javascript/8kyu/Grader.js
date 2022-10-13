// grader(0)   should be "F"
// grader(1.1) should be "F"
// grader(0.9) should be "A"
// grader(0.8) should be "B"
// grader(0.7) should be "C"
// grader(0.6) should be "D"


// //Mine:
function grader(score) {
  if(score > 1 || score < .6){
    return 'F'
  }else if (score >= .9){
    return 'A'
  }else if (score >= .8){
    return 'B'
  }else if (score >= .7){
    return 'C'
  }else{
    return 'D'
  }
}

// //Top Solution:
function grader(score) {
  if (score>1||score<0.6) return 'F'
  if (score<0.7) return 'D'
  if (score<0.8) return 'C'
  if (score<0.9) return 'B'
  return 'A'
}

// //Test:
console.log()