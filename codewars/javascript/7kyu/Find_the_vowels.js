// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// NOTES
// Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)

//Mine:

function vowelIndices(word){
  let result = []
  let vowels = ['a','e','i','o','u','y']
  for(let i = 0; i < word.length; i++){
    if(vowels.includes(word[i].toLowerCase())){
      result.push(i + 1)
    }
  }
  return result
}

//Another Solution:
function vowelIndices(word){
  const str = 'aeiouy';
  const arr = word.toLowerCase().split('');
  let answer = [];
  arr.forEach((name, i) => {
    if (str.indexOf(name) !== -1) {
      answer.push(i + 1);
    }
  });
  return answer;
}

console.log(vowelIndices('hello'))
console.log(vowelIndices('ZXpYQapPhv'))