// The test fixture I use for this kata is pre-populated.

// It will compare your guess to a random number generated using:

// Math.floor(Math.random() * 100 + 1)
// You can pass by relying on luck or skill but try not to rely on luck.

// "The power to define the situation is the ultimate power." - Jerry Rubin

// Good luck!

//test:
// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// //This is exactly what the real test fixture looks like.
// var lucky_number = Math.floor(Math.random() * 100 + 1);
// Test.assertEquals(guess, lucky_number, "Sorry. Unlucky this time.");
//   });
// });


//mine:
//re-wrote Math.random
Math.random = function() {
  return 0.5;
}

var guess = 51