// The Hamming Distance is a measure of similarity between two strings of equal length. Complete the function so that it returns the number of positions where the input strings do not match.

// Examples:
// a = "I like turtles"
// b = "I like turkeys"
// Result: 3

// a = "Hello World"
// b = "Hello World"
// Result: 0

// a = "espresso"
// b = "Expresso"
// Result: 2
// You can assume that the two inputs are ASCII strings of equal length.


//mine:
function hamming(a,b) {
	let counter = 0
	let longestString = Math.max(a.length,b.length)
	for(let i = 0; i < longestString; i++){
	  if(a[i] !== b[i]){
		counter++
	  }
	}
	return counter
}

//top solution:
function hamming(a,b) {
	return a.split('').filter(function(v,i) {return a[i]!=b[i]}).length;
}