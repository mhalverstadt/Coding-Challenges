// Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

// Example:    
// 5.5589 is rounded 5.56   
// 3.3424 is rounded 3.34


//Mine:
twoDecimalPlaces = n => +n.toFixed(2)

//Top Solution:
const twoDecimalPlaces = n =>  Number(n.toFixed(2))


//OR:


//Test:
twoDecimalPlaces(4.659725356)