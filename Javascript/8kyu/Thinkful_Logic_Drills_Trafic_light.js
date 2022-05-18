//You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
// For example, update_light('green') should return 'yellow'.
// Note: Use "" instead of '' in C++.

//Mine:
function updateLight(current) {
  if (current === 'green'){
    return 'yellow'
  }else if (current === 'yellow'){
    return 'red'
  }else{
    return 'green'
  }
}

//Top Answer:
const updateLight = current => ({
  green: 'yellow',
  yellow: 'red',
  red: 'green',
})[current]

//Also:
function updateLight(current) {

  switch (current) {
    case 'green':
      return 'yellow';
      break;
    case 'yellow':
      return 'red';
      break;
    case 'red':
      return 'green';
      break;
    default:
      throw 'Error: wrong input';
      break;
  }
  
}

updateLight("green")


