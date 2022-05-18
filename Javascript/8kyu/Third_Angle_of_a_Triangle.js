//You are given two interior angles (in degrees) of a triangle.
// Write a function to return the 3rd.
// Note: only positive integers will be tested.

//Mine
function otherAngle(a, b) {
  return 180 - a - b
}


//Top Answer
function otherAngle(a, b) {
  return 180-(a+b);
}