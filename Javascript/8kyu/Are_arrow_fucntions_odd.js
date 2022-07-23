// Time to test your basic knowledge in functions! Return the odds from a list:

// [1, 2, 3, 4, 5]  -->  [1, 3, 5]
// [2, 4, 6]        -->  []

//Mine:
const odds = values => values.filter(x => x % 2 !== 0)


//Top Solution:
const odds = values => values.filter(x => x % 2)



//Test: 
console.log()