// I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.

// Can you help me fix the function?


//Mine:
function addFive(num) {
  var total = num + 5
  return total
}


//Top Solution:
function addFive(num) {
  return num + 5;
}


//Test: 
addFive(0)
