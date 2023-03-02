// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));


function zero(func) {return !func ? 0 : func(0)}
function one(func) {return !func ? 1 : func(1)}
function two(func) {return !func ? 2 : func(2)}
function three(func) {return !func ? 3 : func(3)}
function four(func) {return !func ? 4 : func(4)}
function five(func) {return !func ? 5 : func(5)}
function six(func) {return !func ? 6 : func(6)}
function seven(func) {return !func ? 7 : func(7)}
function eight(func) {return !func ? 8 : func(8)}
function nine(func) {return !func ? 9 : func(9)}

function plus(num) {return function(num2){return num2 + num}}
function minus(num) {return function(num2){return num2 - num}}
function times(num) {return function(num2){return num2 * num}}
function dividedBy(num) {return function(num2){return Math.floor(num2 / num)}}



//for fun:
const [zero, one, two, three, four, five, six, seven, eight, nine] = [...Array(10)].map((_, idx) => fn => fn ? fn(idx) : idx);
const [plus, minus, times, dividedBy] = [`+`, `-`, `*`, `/`].map(val => new Function(`b`, `return a => a ${val} b ^ 0`));

console.log(seven(times(five ())))