// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.

// Good luck!

function dup(s) {
  let result = []
  for(let i = 0; i < s.length; i++){
    let word = ''
    for(let j = 0; j <s[i].length; j++){
      if(s[i][j] !== s[i][j-1]){
        word += s[i][j]
      }
    }
    result.push(word)
  }
  return result
};

//Top Solution:
function dup(s) {
	return s.map(w => {
		return w.split('').filter((c, i, arr) => {
			return c !== arr[i - 1];
		}).join('');
	});
};

console.log(dup(["aabracadabra","allottee","assessee"]))