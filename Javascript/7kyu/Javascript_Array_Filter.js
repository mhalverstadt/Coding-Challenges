// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

//Mine:
getEvenNumbers = numbersArray => numbersArray.filter(x=>x%2===0)

// Top Solution:
const getEvenNumbers = numbersArray => numbersArray.filter(num => num % 2 == 0);

// //Test:
console.log()