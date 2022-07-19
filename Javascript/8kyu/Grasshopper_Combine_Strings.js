// Combine strings function
// Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

// Example:

// combineNames('James', 'Stevens')
// returns:

// 'James Stevens'

//Mine:
const combineNames = (first, last) => `${first} ${last}`

//Top Solution:
const combineNames = (...names) => names.join(' ');



//Test: 
console.log()